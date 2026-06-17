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

export const getFeedbacks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}