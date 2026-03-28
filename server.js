const express = require("express");
const fs = require("fs/promises");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const dataDir = path.join(__dirname, "data");
const projectsFile = path.join(dataDir, "projects.json");
const messagesFile = path.join(dataDir, "messages.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

async function readJson(filePath, fallbackValue) {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error.code === "ENOENT") {
      return fallbackValue;
    }
    throw error;
  }
}

async function writeJson(filePath, value) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(value, null, 2), "utf8");
}

app.get("/api/profile", (_req, res) => {
  res.json({
    name: "Your Name",
    role: "Full-Stack Developer",
    tagline: "I craft immersive web experiences with clean architecture.",
    location: "Remote",
    availability: "Open to freelance and full-time opportunities"
  });
});

app.get("/api/projects", async (_req, res) => {
  try {
    const projects = await readJson(projectsFile, []);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Unable to load projects right now." });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "name, email, and message are required."
    });
  }

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailIsValid) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  try {
    const existingMessages = await readJson(messagesFile, []);
    const newMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    existingMessages.push(newMessage);
    await writeJson(messagesFile, existingMessages);

    return res.status(201).json({
      success: true,
      message: "Thanks for reaching out. I'll get back to you soon."
    });
  } catch (error) {
    return res.status(500).json({ error: "Unable to send message right now." });
  }
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
});