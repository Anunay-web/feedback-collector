import { useEffect, useState } from "react";
import { deleteFeedback, getFeedbacks } from "../services/feedbackService";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {

  const [feedbacks, setFeedbacks] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

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

  const handleFilter = async () => {
  try {
    const response = await getFeedbacks(
      keyword,
      from,
      to
    );

    setFeedbacks(response.data);
  } catch (error) {
    console.error("Error filtering feedback:", error);
  }
};  
  const handleDelete = async (id) => {
  try {
    await deleteFeedback(id);

    setFeedbacks(
      feedbacks.filter((feedback) => feedback._id !== id)
    );
  }
  catch (error) {
    console.error(error);
  }
};

  return (
    <div>
      <input
        type="text"
        placeholder="Search feedback..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input
      type="date"
      value={from}
      onChange={(e) => setFrom(e.target.value)} />
      <input
      type="date"
      value={to}
      onChange={(e) => setTo(e.target.value)} />
      <button onClick={handleFilter}>Filter</button>
      <h1>Feedback List</h1>
      {feedbacks.map((feedback) => (
      <FeedbackItem
        key={feedback._id}
        feedback={feedback}
        onDelete={handleDelete}
      />
    ))}
    </div>
  )
}

export default FeedbackList