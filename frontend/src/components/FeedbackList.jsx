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

/**
* Filters feedback entries using keyword and date range
*/
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

/**
* Deletes the selected feedback entry
*/
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

/**
* Opens the delete confirmation modal
* @param {string} id - Feedback ID
*/
  const handleDeleteClick = (id) => {
  setSelectedId(id);
  setIsModalOpen(true);
};

  return (
    <div className="max-w-5xl mx-auto my-10 px-6 font-sans text-gray-800">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">
          Feedback Collector
        </h1>
        <p className="text-gray-500">
          Review and manage customer reviews.
        </p>
      </header>

      <section className="mb-6 flex flex-wrap lg:flex-nowrap items-end gap-3 pb-4 border-b border-gray-200">
        <div className="flex-1 min-w-[200px]">
          <input
          type="text"
          placeholder="Search by name, email, or message..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full h-10 px-4 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="flex items-end gap-2">
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
            <label className="text-xs font-semibold uppercase text-gray-400">
              To</label>
          <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)} 
          className="h-10 px-3 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-blue-500"
          />
            
          </div>
          <button 
            onClick={handleFilter}
            className="h-10 px-4 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Apply Filters
          </button>
          <button
          onClick={() => {
            setKeyword("")
            setFrom("")
            setTo("")
          }}
          className="h-10 px-4 rounded-lg text-sm text-gray-600 font-medium border border-gray-300 hover:bg-gray-50 cursor-pointer"
          >
          Clear
          </button>
        </div>
      </section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Feedback Entries
          </h2>
          <span className="text-sm text-gray-500">
            {feedbacks.length} entries
            </span>
            </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-100 overflow-hidden">
        {feedbacks.length === 0 ? (
          <div className="text-center py-[60px] bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 text-gray-500">
            <p>No feedback entries found matching your criteria.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {feedbacks.map((feedback) => (
                
                <FeedbackItem
                key={feedback._id}
                  feedback={feedback}
                  onDelete={handleDeleteClick}
                />
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
