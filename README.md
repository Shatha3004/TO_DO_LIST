# 📝 To-Do List App (React + Tailwind CSS)

A simple and clean To-Do List web application built using **React** and **Tailwind CSS**. It allows users to add tasks with a name and description, view them in a table format, and manage their tasks efficiently.

---

## ✨ Features

- ✅ Add new tasks with name and description
- ✅ Display tasks in a responsive table
- ✅ Input validation (prevent empty tasks)
- ✅ Clear input fields after adding a task
- ✅ Styled using Tailwind CSS
- 🚧 Future: Delete / Edit / Persist tasks

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Vite (for fast dev server and build tool)

---

## 📦 Installation

### 1. Clone the Repository

bash
git clone https://github.com/your-username/todo-react.git
cd todo-react
2. Install Dependencies
bash
Copy code
npm install
3. Run the App
bash
Copy code
npm run dev
The app will run locally on http://localhost:5173



🧠 Folder Structure
css
Copy code
src/
├── App.jsx
├── List.jsx        # Main To-Do List component
├── index.css       # Tailwind directives
└── main.jsx        # React entry point



🧩 How It Works
useState hooks manage the task list, task name, and description.

Controlled form inputs allow real-time user input tracking.

New tasks are stored in an array of objects:

js
Copy code
{
  name: "Task Name",
  description: "Task Description"
}
Each task is rendered inside a <table> with an index.
