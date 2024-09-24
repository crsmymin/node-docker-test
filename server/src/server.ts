import app from "./app";

const port = process.env.PORT || 3000;

// 서버 실행
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
