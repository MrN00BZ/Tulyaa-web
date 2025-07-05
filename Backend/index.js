// backend/index.js
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());

const loadData = (filename) => {
  const filePath = path.join(__dirname, filename);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
};

const categories = {
  smartphones: "smartphones.json",
  laptops: "laptops.json",
  headphones: "headphones.json",
  clothing: "clothing.json",
  all: "all_products.json",
};

Object.entries(categories).forEach(([key, file]) => {
  const dataset = loadData(file);
  app.get(`/api/${key}`, (req, res) => {
    const q = req.query.q?.toLowerCase() || "";
    const results = dataset.filter(item =>
      Object.values(item).some(val =>
        val?.toString().toLowerCase().includes(q)
      )
    );
    res.json(results);
  });
});

app.get("/", (req, res) => {
  res.send("Smart Deals API is running ✅");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
