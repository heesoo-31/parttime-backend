import express from "express";

const app = express();
const PORT = 3000; // 서버 포트 번호

app.use(express.json()); // JSON 요청을 파싱

// 테스트용 라우트
app.get("/", (req, res) => {
  res.send("Hello TypeScript + Node.js!");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
