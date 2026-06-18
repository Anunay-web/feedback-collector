import { useState } from "react";
import { createFeedback } from "../services/feedbackService";

const FeedbackForm = () => {
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

/**
 * Updates form state when input values change
 * @param {Object} e - Input change event
*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

/**
 * Submits feedback data to the backend
 * @param {Object} e - Form submit event
*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await createFeedback(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
}
    catch (error) {
    console.error("Error submitting feedback:", error);
    } 
}

  return (
    <form onSubmit={handleSubmit} className="w-full p-6 bg-white border border-gray-200 rounded-xl shadow-sm lg:max-w-md xl:max-w-lg">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Share Your Feedback</h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full h-10 px-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full h-10 px-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
        <textarea
          name="message"
          placeholder="Write your feedback here..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full min-h-32 p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
        />
      </div>
      <div className="text-right">
      <button type="submit" className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
        Submit Feedback
      </button>
      </div>
    </form>
  );
};

export default FeedbackForm;