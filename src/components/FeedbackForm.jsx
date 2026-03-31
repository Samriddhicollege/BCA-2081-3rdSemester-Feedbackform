import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import Button from "./Button";

const FeedbackForm = ({ onAdd, editing, onEditDone }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Update form when editing starts
  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setEmail(editing.email);
      setMessage(editing.message);
      setRating(editing.rating);
      setErrors({});
      setSuccessMessage("");
      window.scrollTo(0, 0);
    }
  }, [editing]);

  // Validation functions
  const validateName = (value) => {
    if (!value || !value.trim()) {
      return "Name is required";
    }
    if (value.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    if (value.trim().length > 50) {
      return "Name must not exceed 50 characters";
    }
    return "";
  };

  const validateEmail = (value) => {
    if (!value || !value.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validateMessage = (value) => {
    if (!value || !value.trim()) {
      return "Feedback is required";
    }
    if (value.trim().length < 5) {
      return "Feedback must be at least 5 characters";
    }
    if (value.trim().length > 500) {
      return "Feedback must not exceed 500 characters";
    }
    return "";
  };

  const validateRating = (value) => {
    if (value === 0) {
      return "Please select a rating";
    }
    return "";
  };

  // Handle real-time validation
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (errors.name) {
      setErrors({ ...errors, name: validateName(value) });
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (errors.email) {
      setErrors({ ...errors, email: validateEmail(value) });
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    if (errors.message) {
      setErrors({ ...errors, message: validateMessage(value) });
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
    if (errors.rating) {
      setErrors({ ...errors, rating: validateRating(value) });
    }
  };

  // Form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    
    const nameError = validateName(name);
    if (nameError) newErrors.name = nameError;
    
    const emailError = validateEmail(email);
    if (emailError) newErrors.email = emailError;
    
    const messageError = validateMessage(message);
    if (messageError) newErrors.message = messageError;
    
    const ratingError = validateRating(rating);
    if (ratingError) newErrors.rating = ratingError;

    setErrors(newErrors);

    // If no errors, submit
    if (Object.keys(newErrors).length === 0) {
      onAdd({ 
        name: name.trim(), 
        email: email.trim(), 
        message: message.trim(), 
        rating 
      });
      
      // Show success message
      setSuccessMessage(editing ? "✓ Feedback updated successfully!" : "✓ Feedback submitted successfully!");
      
      // Reset form after 1.5 seconds
      setTimeout(() => {
        setName("");
        setEmail("");
        setMessage("");
        setRating(0);
        setErrors({});
        setSuccessMessage("");
        onEditDone();
      }, 1500);
    }
  };

  // Handle cancel in edit mode
  const handleCancel = () => {
    setName("");
    setEmail("");
    setMessage("");
    setRating(0);
    setErrors({});
    setSuccessMessage("");
    onEditDone();
  };

  return (
    <div className="form-box">
      <div className="form-header">
        <h2>{editing ? "✏️ Edit Feedback" : "➕ Add Feedback"}</h2>
        {editing && <span className="edit-badge">Editing Mode</span>}
      </div>
      
      {/* Success Message */}
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        
        {/* Name Field */}
        <label><strong>Name:</strong></label>
        <input
          type="text"
          placeholder="Your name (2-50 characters)"
          value={name}
          onChange={handleNameChange}
          className={errors.name ? "input-error" : ""}
          maxLength="50"
        />
        {errors.name && <span className="error-text">{errors.name}</span>}

        {/* Email Field */}
        <label><strong>Email:</strong></label>
        <input
          type="email"
          placeholder="Your email (example@domain.com)"
          value={email}
          onChange={handleEmailChange}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}

        {/* Message Field */}
        <label><strong>Feedback:</strong></label>
        <textarea
          placeholder="Your feedback (5-500 characters)"
          value={message}
          onChange={handleMessageChange}
          className={errors.message ? "input-error" : ""}
          rows="4"
          maxLength="500"
        />
        {errors.message && <span className="error-text">{errors.message}</span>}

        {/* Rating Field */}
        <StarRating value={rating} onChange={handleRatingChange} />
        {errors.rating && <span className="error-text">{errors.rating}</span>}
        
        {/* Button Group */}
        <div className="button-group">
          <Button 
            text={editing ? "💾 Update" : "✓ Submit"} 
            type="submit" 
            className="submit-btn"
          />
          {editing && (
            <Button 
              text="✕ Cancel" 
              onClick={handleCancel} 
              className="cancel-btn"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
