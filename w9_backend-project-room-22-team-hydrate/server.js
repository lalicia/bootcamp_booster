import express from "express";
import app from "./app.js"

const PORT = 3001
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
  });
  