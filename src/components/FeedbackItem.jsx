import Button from "./Button";

const FeedbackItem = ({ feedback, onDelete, onEdit }) => {
  return (
    <div className="feedback-item">
      <div className="feedback-row">
        <span className="feedback-name">{feedback.name}</span>
        <span className="feedback-email">{feedback.email}</span>
        <span className="feedback-message">{feedback.message}</span>
        <span className="feedback-rating">{"★".repeat(feedback.rating)}</span>
      </div>
      <div className="feedback-buttons">
        <Button 
          text="Edit" 
          onClick={() => onEdit(feedback)} 
          className="edit-btn"
        />
        <Button 
          text="Delete" 
          onClick={() => onDelete(feedback.id)} 
          className="delete-btn"
        />
      </div>
    </div>
  );
};

export default FeedbackItem;