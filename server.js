// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.text());

let data = { message: "여러분 화이팅!" };

// GET: 메시지 조회
app.get("/", (req, res) => {
  res.status(200).json(data);
});

// POST: 메시지 저장
app.post("/", (req, res) => {
  const body = req.body || "";
  data.message = body;
  res.status(200).send(`받은 POST 데이터: ${body}`);
});

// PUT: 메시지 업데이트
app.put("/", (req, res) => {
  const body = req.body || "";
  data.message = body;
  res.status(200).send(`업데이트된 데이터: ${body}`);
});

// DELETE: 메시지 삭제
app.delete("/", (req, res) => {
  data = {};
  res.status(200).send("데이터가 삭제되었습니다.");
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT}/ 에서 실행 중입니다.`);
});
