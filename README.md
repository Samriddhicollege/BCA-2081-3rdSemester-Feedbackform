# 💬 Feedback Form

A simple React app to collect user feedback with ratings and persistent storage.

---

## 📌 Project Name

Feedback Form

---

## 🔗 Links

- **GitHub Repository:** https://github.com/Samriddhicollege/BCA-2081-3rdSemester-Feedbackform
- **Live Demo:** [Add live demo URL here]

---

## 🧑‍🎓 Student / Author Information

* **Name:** Bishal Budhathoki
* **Roll Number:** 07
* **Course:** BCA 
* **Semester:** 3rd Semester
* **Email:** bishalbudhathoki004@gmail.com

---

## 👨‍🏫 Instructor Information

* **Instructor Name:** Dipak Shrestha
* **Course Title:** React
* **College Name:** Samriddhi College

---

## 📝 Project Overview

This project is a web-based Feedback Form application built using React (Vite) and modern JavaScript. It enables anyone submit their feedback with ratings. The app stores data locally (localStorage) and provides an admin-style list to view, edit, delete, and export feedback entries.

Key goals:
- Provide an accessible, responsive feedback form for students.
- Maintain a lightweight frontend that is easy to deploy and demonstrate.
- Teach frontend development concepts: components, state, effects, and basic persistence.

Repository language composition (approx.):
- JavaScript — 62.6%
- CSS — 35.1%
- HTML — 2.3%

---

## ✨ Features

- Add feedback with name, email, message, and star rating
- View all feedbacks in a table
- Edit existing feedback
- Delete feedback
- Average rating calculation
- Data saved to localStorage (persists after refresh)
- Form validation
- Responsive design

---

## 🛠️ Technologies Used

- React 19
- JavaScript (ES6+)
- Vite
- CSS Grid
- localStorage

---

## 📁 Project Structure

```
src/
  ├── components/
  │     ├── Button.jsx
  │     ├── FeedbackForm.jsx
  │     ├── FeedbackItem.jsx
  │     ├── FeedbackList.jsx
  │     └── StarRating.jsx
  ├── utils/
  │     └── storage.js
  ├── App.jsx
  ├── App.css
  └── main.jsx
```

---

## ⚛️ React Concepts Used

- Components (reusable)
- useState (state management)
- useEffect (localStorage sync)
- Props (parent-child communication)
- Event handling (onClick, onChange)
- List rendering (.map with keys)
- Form validation
- CRUD operations (Create, Read, Update, Delete)
- Conditional rendering

---

## 🚀 Getting Started

### Installation

```bash
# Clone the repo
git clone <repository-url>

# Navigate to project
cd feedback-form

# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📝 How to Use

1. Fill the form with Name, Email, Feedback, and Rating  
2. Click Submit to add feedback  
3. View feedbacks in the table on the left  
4. Edit — click Edit button to modify feedback  
5. Delete — click Delete button to remove feedback  
6. Refresh page — all data is saved and will still be there!

---

## 💾 Data Storage

All feedbacks are saved to the browser's localStorage automatically. Data persists across:
- Page refresh
- Browser restart
- Computer restart

---

## 🎨 UI Features

- Green buttons (Submit / Update)
- Blue buttons (Edit)
- Red buttons (Delete)
- Star rating with hover effect
- Average rating display
- Responsive for mobile and desktop

---

## 📦 CRUD Operations

| Operation | How |
|-----------|-----|
| **Create** | Fill form and click Submit |
| **Read** | View feedbacks in table |
| **Update** | Click Edit, change data, click Update |
| **Delete** | Click Delete button |

---

## 🔧 Utils

**storage.js** - Utility functions:
- `saveFeedback()` — Save to localStorage
- `loadFeedback()` — Load from localStorage
- `clearAllFeedback()` — Clear all data

---

## 📱 Responsive

Works on:
- Desktop (1200px+)
- Tablet (768px–1200px)
- Mobile (below 768px)

---

## 🚧 Challenges Faced

- Handling form validation and giving clear UX feedback for invalid inputs.
- Ensuring consistent styling and responsive layout across devices and browsers.
- Managing CRUD flows and keeping localStorage synchronization reliable.
- Designing a simple but usable admin/list view within a small frontend-only project.

---

## 🔮 Future Enhancements

- Add backend storage ( Express + DB or Firebase) for centralized data and multi-user access.
- Implement authentication for admin access to view/export feedback.
- Add CSV / Excel export and import functionality.
- Add visualization (charts) for rating distributions and insights.
- Add pagination, search, sorting, and advanced filtering in the admin view.
- Convert into a Progressive Web App (PWA) for offline capabilities.
- Integrate email notifications for new submissions.

---

## 🏆 Learning Outcomes

- Practical experience with React component design and state management
- Understand lifecycle via useEffect and localStorage syncing
- Build responsive UI using modern CSS
- Implement basic CRUD in a frontend context

---

## 🧾 Acknowledgement

I would like to thank the course instructor **Dipak Shrestha** and **Samriddhi College** for guidance and support while building this project.

---

## 📜 Declaration

This project is my original academic work completed for the BCA 3rd Semester.

*Signed:* [bishal]  
*Date:* [30-03-2026]

---

## 📄 License

Educational purpose only.
```
