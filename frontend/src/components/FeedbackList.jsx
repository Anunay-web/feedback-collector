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
    <div className="max-w-5xl mx-auto my-10 px-6 font-sans text-gray-800">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
          User Feedback Management
        </h1>
        <p className="text-gray-500">
          Review and manage customer reviews.
        </p>
      </header>

      <section className="p-5 mb-8 bg-gray-50 border border-gray-200 rounded-xl flex flex-wrap gap-5 items-end">
        <div className="flex-1 min-w-[250px]">
          <input
          type="text"
          placeholder="Search by name, email, or message..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full h-10 px-4 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="flex flex-wrap items-end gap-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase text-gray-600 tracking-wider">From</label>
          <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="h-10 px-3 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-blue-500"
          />         
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase text-gray-600 tracking-wider">To</label>
          <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)} 
          className="h-10 px-3 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-blue-500"
          />
            
          </div>
          <button 
            onClick={handleFilter}
            className="h-10 px-5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150 cursor-pointer"
          >
            Apply Filters
          </button>
          <button
          onClick={() => {
            setKeyword("")
            setFrom("")
            setTo("")
          }}
          className="h-10 px-5 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-100 cursor-pointer"
          >
          Clear
          </button>
        </div>
      </section>

      <div>
        {feedbacks.length === 0 ? (
          <div className="text-center py-[60px] bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 text-gray-500">
            <p>No feedback entries found matching your criteria.</p>
          </div>
        ) : (
          <div className="flex flex-wrap -m-3">
            {feedbacks.map((feedback) => (
              <div key={feedback._id} className="w-full p-3 sm:w-1/2 md:w-1/3">
                <FeedbackItem
                  feedback={feedback}
                  onDelete={handleDeleteClick}
                />
              </div>
            ))}
          </div>
        )}
      </div>
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
