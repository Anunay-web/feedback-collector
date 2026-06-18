import { useEffect, useState } from "react";
import { getFeedbacks } from "../services/feedbackService";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {

  const [feedbacks, setFeedbacks] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    /**
     * Fetches all feedback entries from the backend
    */
    const fetchFeedbacks = async () => {
      try {
        const response = await getFeedbacks(keyword);
        setFeedbacks(response.data);
      } 
      catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };
    fetchFeedbacks();
  }, [keyword]);
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search feedback..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
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