const express = require("express");
const router = express.Router();

const { createFeedback, getFeedbacks, deleteFeedback } = require("../controllers/feedbackController");

router.post("/", createFeedback);
router.get("/", getFeedbacks);
router.delete("/:id", deleteFeedback);

module.exports = router;