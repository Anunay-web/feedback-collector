const FeedbackItem = ({ feedback, onDelete }) => {
  return (
    <div>
      <h3>{feedback.name}</h3>
      <p>{feedback.email}</p>
      <p>{feedback.message}</p>
      <button onClick={() => onDelete(feedback._id)}>
        Delete
      </button>
    </div>
  )
}

export default FeedbackItem