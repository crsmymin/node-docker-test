import express, { Application, Request, Response, Router } from "express";

const app: Application = express();
const router: Router = Router();

// 미들웨어 설정 (필요한 경우)
// app.use(someMiddleware);

// 기본 라우팅 설정
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from app!");
});

app.get("/hong", (req: Request, res: Response) => {
  res.send("Hello hong world!");
});

app.get("/doo", (req: Request, res: Response) => {
  res.send("Hello doo doo world!!!!");
});

app.get("/young", (req: Request, res: Response) => {
  res.send("Hello doo young world!!!!");
});

export default app;
