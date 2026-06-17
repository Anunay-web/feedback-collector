import { useState } from "react";
import { createFeedback } from "../services/feedbackService";

const FeedbackForm = () => {
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await createFeedback(formData);
    
    console.log(response);

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;