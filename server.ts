import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Database from "better-sqlite3";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("submissions.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT,
    message TEXT,
    source TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const ADMIN_PASSWORD = "1234";

  const checkAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.headers["x-admin-password"] === ADMIN_PASSWORD) {
      next();
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  };

  // API Routes
  app.post("/api/submissions", (req, res) => {
    const { name, phone, service, message, source } = req.body;
    try {
      const stmt = db.prepare(
        "INSERT INTO submissions (name, phone, service, message, source) VALUES (?, ?, ?, ?, ?)"
      );
      stmt.run(name, phone, service, message, source);
      res.status(201).json({ success: true });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to save submission" });
    }
  });

  app.get("/api/submissions", checkAuth, (req, res) => {
    try {
      const stmt = db.prepare("SELECT * FROM submissions ORDER BY createdAt DESC");
      const result = stmt.all();
      res.json(result);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  app.delete("/api/submissions/:id", checkAuth, (req, res) => {
    const { id } = req.params;
    try {
      const stmt = db.prepare("DELETE FROM submissions WHERE id = ?");
      stmt.run(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to delete submission" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
