const ModalComponent = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      onClick={onClose}>
        <div 
        className="p-6 bg-white rounded-xl w-full max-w-md shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
      <h2 className="text-lg font-bold text-gray-900 mb-2">
        Delete Feedback
        </h2>
      <p className="text-sm text-gray-600 mb-5">
        Are you sure you want to delete this feedback?
      </p>
      <div className="flex justify-end gap-3">
      <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
        Cancel
      </button>
      <button onClick={onConfirm} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 cursor-pointer">
        Delete
      </button>
      </div>
      </div>
    </div>
  )
}

export default ModalComponent
