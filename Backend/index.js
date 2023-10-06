import dotenv from "dotenv";
dotenv.config();
import express from "express";
import "./Database/connection.js";
import router from "./Database/Model/Router/login.js";
import productRouter from "./Database/Model/Router/con1Data.js";
import cookieParser from "cookie-parser";
import auth from "./Middleware/auth.js";
//By using the cors middleware and calling app.use(cors()),
// you allow your Express server to respond to requests from different origins,
// including http://localhost:3001.
import cors from "cors";
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(cookieParser());

app.use("/login", router);
app.use("/conData", auth, productRouter);
app.get("/", (req, res) => {
  console.log("Test");
  res.send("Hello Saurav");
});

app.listen(PORT, () =>
  console.log(`Server is running on : http://localhost:${PORT}`)
);
