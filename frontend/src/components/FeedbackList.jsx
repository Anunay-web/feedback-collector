import { useEffect, useState } from "react";
import { deleteFeedback, getFeedbacks } from "../services/feedbackService";
import FeedbackItem from "./FeedbackItem";
import ModalComponent from "./ModalComponent";

const FeedbackList = () => {

  const [feedbacks, setFeedbacks] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
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
  const confirmDelete = async () => {
  try {
    await deleteFeedback(selectedId);

    setFeedbacks(
      feedbacks.filter((feedback) => feedback._id !== selectedId)
    );
    setIsModalOpen(false);
    setSelectedId(null);
  }
  catch (error) {
    console.error(error);
  }
};
  const handleDeleteClick = (id) => {
  setSelectedId(id);
  setIsModalOpen(true);
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
        onDelete={handleDeleteClick}
      />
    ))}
    <ModalComponent
     isOpen={isModalOpen}
     onClose={() => {
       setIsModalOpen(false);
       setSelectedId(null);
     }}
     onConfirm={confirmDelete}
    />
    </div>
  )
}

export default FeedbackList