// LocalStorage utility functions for reusability

export const saveFeedback = (feedbackList) => {
  try {
    localStorage.setItem("feedbacks", JSON.stringify(feedbackList));
    console.log("Feedback saved to localStorage");
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

export const loadFeedback = () => {
  try {
    const saved = localStorage.getItem("feedbacks");
    if (saved) {
      const parsed = JSON.parse(saved);
      console.log("Feedback loaded from localStorage:", parsed);
      return parsed;
    }
    return [];
  } catch (error) {
    console.error("Error loading from localStorage:", error);
    return [];
  }
};

export const clearAllFeedback = () => {
  try {
    localStorage.removeItem("feedbacks");
    console.log("All feedback cleared from localStorage");
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
};