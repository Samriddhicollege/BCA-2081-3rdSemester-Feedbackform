import { useState } from "react";
import StarRating from "./StarRating";
import Button from "./Button";

const FeedbackForm = ({ onAdd, editing, onEditDone }) => {
  const [name, setName] = useState(editing ? editing.name : "");
  const [email, setEmail] = useState(editing ? editing.email : "");
  const [message, setMessage] = useState(editing ? editing.message : "");
  const [rating, setRating] = useState(editing ? editing.rating : 0);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !message || rating === 0) {
      setError("All fields are required!");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email!");
      return;
    }

    onAdd({ name, email, message, rating });
    setName("");
    setEmail("");
    setMessage("");
    setRating(0);
    onEditDone();
  };

  return (
    <div className="form-box">
      <h2>{editing ? "Edit Feedback" : "Add Feedback"}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        
        <label><strong>Name:</strong></label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label><strong>Email:</strong></label>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label><strong>Feedback:</strong></label>
        <textarea
          placeholder="Your feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
        />

        <label><strong>Rating:</strong></label>
        <StarRating value={rating} onChange={setRating} />
        
        <Button 
          text={editing ? "Update" : "Submit"} 
          type="submit" 
          className="submit-btn"
        />
      </form>
      {editing && (
        <Button 
          text="Cancel" 
          onClick={onEditDone} 
          className="cancel-btn"
        />
      )}
    </div>
  );
};

export default FeedbackForm;