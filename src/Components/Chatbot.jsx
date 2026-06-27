import React, { useState, useRef, useEffect } from "react";
import "../styles/chatbot.css";

const Chatbot = ({ onFilterProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! How can I assist you today? I can help you with product information, orders, and more.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Escape HTML
  const escapeHtml = (str) =>
    String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  // Lightweight markdown-like -> HTML converter
  const mdToHtml = (text) => {
    if (!text) return "";

    // Normalize explicit <br> tags to newlines, then remove table divider rows
    let raw = String(text).replace(/<br\s*\/?>(?:\r\n|\r|\n)?/gi, "\n");
    raw = raw.replace(/^\s*\|?[-:\s|]+\|?\s*$/gm, "");
    raw = raw.replace(/^\s*\|(.*)\|?\s*$/gm, (_, inner) =>
      inner.replace(/\|/g, " - "),
    );

    let s = escapeHtml(raw);

    // headings
    s = s.replace(/^\s*\*\*(.+?)\*\*\s*$/gm, "<h3>$1</h3>");
    // bold
    s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

    // ordered lists
    s = s.replace(/(?:\r\n|\r|\n)(\s*\d+\.\s.*(?:\r\n|\r|\n)*)/g, (m, grp) => {
      const items = grp
        .trim()
        .split(/(?:\r\n|\r|\n)/)
        .map((l) => l.replace(/^\s*\d+\.\s*/, ""));
      return "<ol>" + items.map((i) => `<li>${i}</li>`).join("") + "</ol>";
    });

    // unordered lists
    s = s.replace(
      /(?:\r\n|\r|\n)(\s*(?:[-\*]\s.*)(?:\r\n|\r|\n)*)/g,
      (m, grp) => {
        const items = grp
          .trim()
          .split(/(?:\r\n|\r|\n)/)
          .map((l) => l.replace(/^\s*[-\*]\s*/, ""));
        return "<ul>" + items.map((i) => `<li>${i}</li>`).join("") + "</ul>";
      },
    );

    // paragraphs: double newlines -> paragraphs, single newline -> <br/>
    s = s
      .split(/(?:\r\n|\r|\n){2,}/)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => p.replace(/(?:\r\n|\r|\n)/g, "<br/>"))
      .map((p) => `<p>${p}</p>`)
      .join("");

    // convert escaped <br> back
    s = s.replace(/&lt;br\s*\/?&gt;/gi, "<br/>");

    // remove stray pipes
    s = s.replace(/\|/g, " - ");

    return s;
  };

  // Safely parse JSON if LLM embeds JSON inside text
  const safeJsonParse = (value) => {
    if (!value) return null;
    if (typeof value === "object") return value;
    try {
      return JSON.parse(value);
    } catch (e) {
      // try to extract a JSON substring
      try {
        const m = String(value).match(/\{[\s\S]*\}/);
        if (m) return JSON.parse(m[0]);
      } catch (e2) {
        return null;
      }
      return null;
    }
  };

  const performFilterApi = async (filters) => {
    if (!filters || !onFilterProducts) return null;

    const params = new URLSearchParams();
    if (filters.category) params.append("category", filters.category);
    if (filters.color) params.append("color", filters.color);
    if (filters.brand) params.append("brand", filters.brand);
    if (filters.size) params.append("size", filters.size);
    if (filters.minPrice) params.append("minPrice", filters.minPrice);
    if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
    if (filters.search) params.append("search", filters.search);

    const url = `http://localhost:5003/con4Data/filter?${params.toString()}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Filter API failed");
    const json = await res.json();
    if (json.success) {
      onFilterProducts(json.data);
      return json;
    }
    throw new Error(json.message || "no data");
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { type: "user", text: inputValue };
    setMessages((p) => [...p, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const resp = await fetch("http://localhost:8000/api/v1/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: inputValue, session_id: null }),
      });
      if (!resp.ok) throw new Error("chat failed");
      const data = await resp.json();

      const botMessage = { type: "bot", text: data.answer };
      setMessages((p) => [...p, botMessage]);

      const payload = safeJsonParse(data) || safeJsonParse(data.answer);
      const action = data.action || payload?.action;
      const filters = data.filters || payload?.filters;

      if (action === "FILTER_PRODUCTS" && filters) {
        const fr = await performFilterApi(filters);
        const msg = fr?.count
          ? `I found ${fr.count} matching products and displayed them on the homepage.`
          : "No products matched those filters.";
        setMessages((p) => [...p, { type: "bot", text: msg }]);
      }
    } catch (err) {
      console.error(err);
      setMessages((p) => [
        ...p,
        { type: "bot", text: "Sorry, something went wrong." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button
          className="chatbot-toggle-btn"
          onClick={() => setIsOpen(true)}
          title="Open Chat"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Customer Support</h3>
            <button
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              title="Close Chat"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.type === "user" ? "user-message" : "bot-message"}`}
              >
                {message.type === "bot" && (
                  <span className="bot-avatar">🤖</span>
                )}
                <div
                  className="message-content"
                  dangerouslySetInnerHTML={{ __html: mdToHtml(message.text) }}
                />
                {message.type === "user" && (
                  <span className="user-avatar">👤</span>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="message bot-message">
                <span className="bot-avatar">🤖</span>
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-form" onSubmit={sendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your question..."
              disabled={isLoading}
              className="chatbot-input"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="chatbot-send-btn"
            >
              📤
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
