import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/feedback`;

/**
 * Sends feedback data to the backend
 * @param {Object} feedbackData - User feedback details
 */
export const createFeedback = async (feedbackData) => {
  const response = await axios.post(API_URL, feedbackData);

  return response.data;
};


/**
 * Retrieves feedback entries with optional search keyword
 * @param {string} keyword - Search term
 */
export const getFeedbacks = async (
    keyword="",
    from="",
    to=""
) => {
    const response = await axios.get(API_URL,
         {
    params: {
      keyword,
      from,
      to
    },
  }
    );
    
    return response.data;
}