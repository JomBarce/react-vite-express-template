import dotenv from 'dotenv';
dotenv.config();

import { createServer } from 'http';
import app from './app.js';

const server = createServer(app);

const PORT = Number(process.env.PORT) || 9001;

server.listen(PORT, () => {
  console.log(`API started on http://localhost:${PORT}`);
});
