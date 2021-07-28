import express from "express";
import "../typeorm";

const app = express();

app.listen(3333, () => console.log("Server running 🚀"));
