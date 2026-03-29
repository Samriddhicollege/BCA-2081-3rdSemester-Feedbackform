import { useState, useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingFeedback, setEditingFeedback] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage when app starts
  useEffect(() => {
    console.log("App loading - checking localStorage");
    const saved = localStorage.getItem("feedbacks");
    console.log("Saved data from localStorage:", saved);
    
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        console.log("Parsed feedbacks:", parsed);
        setFeedbacks(parsed);
      } catch (error) {
        console.error("Error parsing localStorage:", error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever feedbacks change
  useEffect(() => {
    if (isLoaded) {
      console.log("Saving to localStorage:", feedbacks);
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
    }
  }, [feedbacks, isLoaded]);

  const addFeedback = (feedback) => {
    console.log("Adding feedback:", feedback);
    
    if (editingFeedback) {
      setFeedbacks(
        feedbacks.map((f) =>
          f.id === editingFeedback.id ? { ...feedback, id: editingFeedback.id } : f
        )
      );
      setEditingFeedback(null);
    } else {
      const newFeedback = {
        ...feedback,
        id: Date.now(),
      };
      setFeedbacks([newFeedback, ...feedbacks]);
    }
  };

  const deleteFeedback = (id) => {
    console.log("Deleting feedback with id:", id);
    setFeedbacks(feedbacks.filter((f) => f.id !== id));
  };

  const editFeedback = (feedback) => {
    console.log("Editing feedback:", feedback);
    setEditingFeedback(feedback);
  };

  return (
    <div className="app">
      <h1>Feedback Form</h1>
      <div className="container">
        
        {/* LEFT SIDE - Feedback List (only if feedback exists) */}
        {feedbacks.length > 0 && (
          <FeedbackList
            feedbacks={feedbacks}
            onDelete={deleteFeedback}
            onEdit={editFeedback}
          />
        )}

        {/* FORM - Centered or on right */}
        <div className={`form-section ${feedbacks.length === 0 ? "centered" : ""}`}>
          <FeedbackForm
            onAdd={addFeedback}
            editing={editingFeedback}
            onEditDone={() => setEditingFeedback(null)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;