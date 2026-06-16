const Feedback = require("../models/Feedback");

/**
 * Creates a new feedback entry
 */
exports.createFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const feedback = await Feedback.create({
      name,
      email,
      message,
    })

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      data: feedback,
    });

  } 
  catch (error) {
    console.error("Error creating feedback:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    })

  }
};

/**
 * Retrieves all feedback entries
 */
exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find()
      .sort({ createdAt: -1 }); // Sort by most recent feedback first

    res.status(200).json({
      success: true,
      count: feedbacks.length,
      data: feedbacks,
    });
  } 
  catch (error) {
    console.error("Error fetching feedback:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};