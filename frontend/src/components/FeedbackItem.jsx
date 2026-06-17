const FeedbackItem = ({ feedback }) => {
  return (
    <div>
      <h3>{feedback.name}</h3>
      <p>{feedback.email}</p>
      <p>{feedback.message}</p>
    </div>
  )
}

export default FeedbackItem