const FeedbackItem = ({ feedback, onDelete }) => {
  return (
    <div className="p-5 bg-white border border-gray-200 rounded-xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-3">
      <h3 className="text-base font-semibold text-gray-900">{feedback.name}</h3>
      <span className="text-xs text-gray-500">{feedback.email}</span>
      </div>
      <p className="mb-4 text-sm text-gray-600">
        {feedback.message}
      </p>
      <div className="text-right">
      <button onClick={() => onDelete(feedback._id)} className="text-xs font-semibold text-red-600 hover:underline cursor-pointer">
        Delete
      </button>
      </div>
    </div>
  )
}

export default FeedbackItem