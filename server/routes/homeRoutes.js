const express = require('express');
const app = express();


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/checkout", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/products/:productId", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/user/:userId", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/user/seller-dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/user/seller-dashboard/product/:productId", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Catch-all route for unmatched routes (React Router will handle them)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});