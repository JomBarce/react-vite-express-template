import express from "express";
import cors from "cors";
// import path from "path";
import type { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json({ limit: "20mb" }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/api/health", (_req: Request, res: Response) => {
  res.send({ status: "ok" });
});

// Example route
app.get("/api/hello", (_req: Request, res: Response) => {
  res.json({ message: "Hello from Express!" });
});

// // Serve static files from Vite build output
// const distPath = path.resolve(__dirname, "../../.local/vite/dist");
// app.use(express.static(distPath));

// // Optional: Serve index.html for non-API routes (for SPA support)
// app.get("*", (_req: Request, res: Response) => {
//   res.sendFile(path.join(distPath, "index.html"));
// });

export default app;