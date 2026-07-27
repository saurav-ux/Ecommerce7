# 🛍️ Agentic AI shopping assistant

A modern **Agentic AI shopping assistant** inspired by Myntra, built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. Along with a complete shopping experience, this project integrates an **Agentic AI Chatbot** powered by **LangGraph**, **FastAPI**, and **RAG (Retrieval-Augmented Generation)** to provide intelligent product search and customer support.

🔗 **Live Demo:** https://sauravfullstackmyntaclone.netlify.app/

---

# 🚀 Features

## 🛒 E-Commerce Features

* 🔐 User Authentication (Login & Signup)
* 🛍️ Browse Products
* ❤️ Add / Remove Wishlist
* 🛒 Add / Remove Cart
* 🔍 Product Filtering
* 📱 Fully Responsive UI
* ⚡ Fast API Integration using RTK Query

---

## 🤖 AI Chatbot Features

An intelligent Agentic AI chatbot capable of understanding natural language and routing user queries to specialized agents.

### 📄 RAG Agent

Uses Retrieval-Augmented Generation to answer customer queries from business documents such as:

* Return Policy
* Cancellation Policy
* Shipping Policy
* Refund Policy
* Terms & Conditions
* User Conduct
* Platform Rules

Example Questions

* What is the return policy?
* Can I cancel my order after shipping?
* How long does delivery take?

---

### 🛍️ Product Search Agent

Allows customers to search products using natural language.

Example Queries

* Show me black t-shirts under ₹1000
* Show BIBA ethnic wear
* I need a yellow kurta
* Show pink dresses
* Show white Manyavar kurta

The Product Search Agent extracts structured filters and seamlessly integrates with the product filtering APIs.

---

### 🧠 Agent Orchestrator

The chatbot intelligently routes user requests:

```
User Question
       │
       ▼
Agent Orchestrator
       │
 ┌─────┴─────┐
 ▼           ▼
RAG Agent   Product Search Agent
```

This enables the chatbot to choose the appropriate agent automatically without requiring user intervention.

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Redux Toolkit
* RTK Query
* Material UI
* Formik
* Yup
* HTML5
* CSS3

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## AI Stack

* Python
* FastAPI
* LangGraph
* LangChain
* Groq LLM
* HuggingFace Embeddings
* ChromaDB / MongoDB Atlas Vector Search (planned)

---

# 🏗️ System Architecture

```
                 React Frontend
                        │
                        ▼
              FastAPI AI Service
                        │
                Agent Orchestrator
                 ┌──────────────┐
                 │              │
                 ▼              ▼
            RAG Agent     Product Search Agent
                 │              │
                 ▼              ▼
          Vector Database    MongoDB
                 │              │
                 └──────┬───────┘
                        ▼
                  Response to User
```

---

# 📂 Project Structure

```
Ecommerce7/

├── Backend/                 # Node.js Backend
│
├── chatbot/                 # FastAPI + LangGraph AI Service
│   ├── agents/
│   ├── api/
│   ├── graph/
│   ├── models/
│   ├── tools/
│   ├── database/
│   └── main.py
│
├── src/                     # React Frontend
│
├── public/
│
├── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone <repository-url>

cd Ecommerce7
```

---

## Install Frontend

```bash
npm install
```

---

## Install Backend

```bash
cd Backend

npm install
```

---

## Install AI Chatbot

```bash
cd chatbot

python -m venv venv

pip install -r requirements.txt
```

---

## Environment Variables

### Backend (.env)

```
DATABASE=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Chatbot (.env)

```
GROQ_API_KEY=your_groq_api_key

MONGO_URI=your_mongodb_uri
```

---

# ▶️ Running the Project

### Start Backend

```bash
cd Backend

npm start
```

### Start AI Chatbot

```bash
cd chatbot

uvicorn main:app --reload
```

### Start React Frontend

```bash
npm start
```

---

# 📸 Screenshots

## 🏠 Home Page

<img width="1352" height="593" alt="image" src="https://github.com/user-attachments/assets/6a99734a-e7bd-41dc-836b-c6f3fbc6de03" />



---

## 🛍️ Product Listing

<img width="1355" height="597" alt="image" src="https://github.com/user-attachments/assets/9095ade4-ae39-4254-b27d-5e698e86e6f7" />


---

## ❤️ Wishlist

<img width="1344" height="591" alt="image" src="https://github.com/user-attachments/assets/4492358d-efd7-46e5-8667-7c4bf6943131" />




---

## 🤖 AI Chatbot

<img width="1334" height="586" alt="image" src="https://github.com/user-attachments/assets/98371a42-cb9e-4d4e-9025-a0421fc294ec" />


---

## 📄 RAG Agent Demo

<img width="1337" height="591" alt="image" src="https://github.com/user-attachments/assets/034a1349-13af-4376-8633-44479a26b275" />
<img width="1346" height="592" alt="image" src="https://github.com/user-attachments/assets/e7f56250-b627-4d87-882f-b175b3409bc4" />



---

## 🔍 Product Search Agent Demo

<img width="1339" height="595" alt="image" src="https://github.com/user-attachments/assets/bf74607c-9f76-4f10-b36a-4a28657b83bf" />
<img width="1348" height="595" alt="image" src="https://github.com/user-attachments/assets/b7cea867-af7a-4a53-a9f3-769461394282" />


---

# 🔮 Future Enhancements

* Order Tracking Agent
* Cart Management Agent
* Wishlist Agent
* Product Recommendation Agent
* Review Summarization
* Voice-based Shopping Assistant
* MongoDB Atlas Vector Search
* Conversation Memory
* Streaming Responses
* Docker & Kubernetes Deployment

---

# 👨‍💻 Author

**Saurav Anand**

If you found this project helpful, consider giving it a ⭐ on GitHub!
