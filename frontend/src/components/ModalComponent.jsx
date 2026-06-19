/**
 * Confirmation modal for feedback deletion
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls modal visibility
 * @param {Function} props.onClose - Closes modal
 * @param {Function} props.onConfirm - Confirms deletion
 */
const ModalComponent = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/40 overflow-y-auto min-h-screen"
      onClick={onClose}>
        <div 
        className="p-6 bg-white rounded-xl w-full max-w-sm md:max-w-md shadow-xl border border-gray-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
      <h2 className="text-lg font-bold text-gray-900 mb-2">
        Delete Feedback
        </h2>
      <p className="text-sm text-gray-600 mb-5">
        Are you sure you want to delete this feedback?
      </p>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 w-full">
      <button onClick={onClose} className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
        Cancel
      </button>
      <button onClick={onConfirm} className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 shadow-sm cursor-pointer">
        Delete
      </button>
      </div>
      </div>
    </div>
  )
}

export default ModalComponent
