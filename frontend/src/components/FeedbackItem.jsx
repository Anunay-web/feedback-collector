const FeedbackItem = ({ feedback, onDelete }) => {
  return (
    <div className="p-5 bg-white border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors w-full">
      <div className="w-full sm:w-1/4 min-w-[160px] flex flex-col justify-center gap-0.5 shrink-0">
      <h3 className="text-base font-semibold text-gray-900">{feedback.name}</h3>
      <span className="text-xs text-gray-500">{feedback.email}</span>
      <span className="text-xs text-gray-400">{new Date(feedback.createdAt).toLocaleDateString()}</span>
      </div>
      <div className="w-full flex-1 text-gray-600 text-sm max-w-2xl">
      <p className="bg-gray-50  bg-gray-50 break-words p-3 rounded-lg border border-gray-100 whitespace-pre-wrap">
        {feedback.message}
      </p>
      </div>
      <div className="w-full md:w-auto text-right md:pl-2 shrink-0">
      <button onClick={() => onDelete(feedback._id)} className="w-full px-4 py-1 text-xs font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 cursor-pointer transition-colors">
        Delete
      </button>
      </div>
    </div>
  )
}

export default FeedbackItem