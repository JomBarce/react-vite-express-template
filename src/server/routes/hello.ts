import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

router.get("/hello", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Hello World!" });
});

export default router;