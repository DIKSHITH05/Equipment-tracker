const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all equipment
router.get("/", (req, res) => {
  db.all("SELECT * FROM equipment", [], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// ADD equipment
router.post("/", (req, res) => {
  const { name, type, status, lastCleaned } = req.body;

  if (!name || !type || !status || !lastCleaned) {
    return res.status(400).json({ message: "All fields required" });
  }

  db.run(
    `INSERT INTO equipment (name, type, status, lastCleaned) VALUES (?, ?, ?, ?)`,
    [name, type, status, lastCleaned],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID });
    }
  );
});

// UPDATE equipment
router.put("/:id", (req, res) => {
  const { name, type, status, lastCleaned } = req.body;

  db.run(
    `UPDATE equipment SET name=?, type=?, status=?, lastCleaned=? WHERE id=?`,
    [name, type, status, lastCleaned, req.params.id],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ updated: this.changes });
    }
  );
});

// DELETE equipment
router.delete("/:id", (req, res) => {
  db.run(
    `DELETE FROM equipment WHERE id=?`,
    [req.params.id],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ deleted: this.changes });
    }
  );
});

module.exports = router;
