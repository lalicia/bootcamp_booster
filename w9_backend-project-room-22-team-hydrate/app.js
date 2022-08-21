import express from "express";
import cors from "cors";
import resourcesRoute from './routes/resources.js';
const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(cors());

// test route
app.get("/", function (req, res) {
  res.json({
    success: true,
    message: "Test route up and running!",
  });
});



app.use('/resources', resourcesRoute);

export default app;