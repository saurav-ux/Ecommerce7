import os

from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma

# -----------------------------
# Configuration
# -----------------------------
PDF_PATH = os.path.join("pdfs", "MYNTRA_T_and_C.pdf")
PERSIST_DIRECTORY = "./database"
COLLECTION_NAME = "pdf_docs"

# -----------------------------
# Check PDF
# -----------------------------
if not os.path.exists(PDF_PATH):
    raise FileNotFoundError(f"PDF not found: {PDF_PATH}")

print("Loading PDF...")

loader = PyPDFLoader(PDF_PATH)
pages = loader.load()

print(f"Loaded {len(pages)} pages")

# -----------------------------
# Split Documents
# -----------------------------
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)

chunks = text_splitter.split_documents(pages)

print(f"Created {len(chunks)} chunks")

# -----------------------------
# Embedding Model
# -----------------------------
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

# -----------------------------
# Create ChromaDB
# -----------------------------
if not os.path.exists(PERSIST_DIRECTORY):
    os.makedirs(PERSIST_DIRECTORY)

print("Creating vector database...")

vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory=PERSIST_DIRECTORY,
    collection_name=COLLECTION_NAME,
)

print("Vector database created successfully!")
