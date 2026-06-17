import { useEffect, useState } from "react";
import { getFeedbacks } from "../services/feedbackService";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {

  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    /**
     * Fetches all feedback entries from the backend
    */
    const fetchFeedbacks = async () => {
      try {
        const response = await getFeedbacks();
        setFeedbacks(response.data);
      } 
      catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };
    fetchFeedbacks();
  }, []);
  
  
  return (
    <div>
      <h1>Feedback List</h1>
      {feedbacks.map((feedback) => (
      <FeedbackItem
        key={feedback._id}
        feedback={feedback}
      />
    ))}
    </div>
  )
}

export default FeedbackList