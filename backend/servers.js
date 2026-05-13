const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/api/message", (req, res) => {
  console.log("contact received:");
  console.log(req.body);

  res.json({ success: true, message: "Message received" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`HAHA`);
  console.log(`AHAHAHAHAHAHAHAHAHAHAHAHH`);
});