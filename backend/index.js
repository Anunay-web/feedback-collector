require("dotenv").config();
const express = require('express');
const cors = require('cors');
const feedbackRoutes = require("./routes/feedbackRoutes");

const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/feedback", feedbackRoutes);

app.get('/', (req, res) => {
  res.send('Feedback-Collector API is running...');
}
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


