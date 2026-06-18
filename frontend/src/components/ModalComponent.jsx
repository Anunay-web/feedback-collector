const ModalComponent = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  if(!isOpen) return null;

  return (
    <div>
      <h2>Delete Feedback</h2>
      <p>Are you sure you want to delete this feedback?</p>
      <button onClick={onConfirm}>Delete</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  )
}

export default ModalComponent
