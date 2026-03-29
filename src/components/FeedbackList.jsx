import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedbacks, onDelete, onEdit }) => {
  if (feedbacks.length === 0) {
    return (
      <div className="feedback-box">
        <h2>Feedback List</h2>
        <p className="no-feedback">No feedback yet</p>
      </div>
    );
  }

  const avgRating = (
    feedbacks.reduce((sum, f) => sum + f.rating, 0) / feedbacks.length
  ).toFixed(1);

  return (
    <div className="feedback-box">
      <h2>Feedback List ({feedbacks.length})</h2>
      <p className="avg">Average Rating: {avgRating} / 5</p>
      
      <div className="table-header">
        <div className="col-name">Name</div>
        <div className="col-email">Email</div>
        <div className="col-message">Feedback</div>
        <div className="col-rating">Rating</div>
      </div>

      {feedbacks.map((feedback) => (
        <FeedbackItem
          key={feedback.id}
          feedback={feedback}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default FeedbackList;