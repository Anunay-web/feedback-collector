import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/feedback`;

/**
 * Sends feedback data to the backend
 * @param {Object} feedbackData - User feedback details
* @returns {Promise<Object>} API response data
 */
export const createFeedback = async (feedbackData) => {
  const response = await axios.post(API_URL, feedbackData);

  return response.data;
};


/**
 * Retrieves feedback entries with optional filters
 * @param {string} keyword - Search keyword
 * @param {string} from - Start date
 * @param {string} to - End date
 * @returns {Promise<Object>} API response data
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

/**
 * Deletes a feedback entry
 * @param {string} id - Feedback ID
 * @returns {Promise<Object>} API response data
 */
export const deleteFeedback = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);

    return response.data;
}