import dotenv from "dotenv";
import { createServer } from "http";
import app from "./restApi.ts";

dotenv.config();

const server = createServer(app);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 9001;

server.listen(PORT, () => {
  console.log(`API started on http://localhost:${PORT}`);
});