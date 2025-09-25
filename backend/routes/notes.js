const express = require('express');
const router = express.Router();

// Basisroute
router.get("/", (req, res) => {
  res.json({ message: "Willkommen bei deinem Notizen-Service!" });
});

// Dynamische Route
router.get("/:name", (req, res) => {
  const { name } = req.params;
  const folder = req.app.locals.folders?.[name];

  if (!folder) {
    return res.status(404).json({ error: "Ordner nicht gefunden" });
  }

  const { title, content } = folder;
  res.json({ name, title, content });
});

module.exports = router;
