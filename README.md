# Kanban Task Board

A simple Kanban task management application built with React and Tailwind CSS.

The project is inspired by tools such as Trello and is being developed as a learning project to practice React fundamentals, component architecture, state management with reducers, forms, browser storage, and native drag and drop.

## 🔗 Live Demo

[Open the deployed application](https://board-task-app.vercel.app/)

## 🚀 Features

- Create tasks
- Edit task titles
- Delete tasks
- Mark tasks as completed
- Create and delete Kanban boards
- Organize tasks into different Kanban columns
- Drag tasks between boards
- Cancel task editing
- Select a column when creating a task
- Store tasks and boards locally using `localStorage`
- Display tasks dynamically based on their column
- Modal-style interfaces for creating tasks and boards
- Responsive UI for mobile and desktop screens, built with Tailwind CSS

## 🛠️ Technologies

- React
- JavaScript
- Tailwind CSS
- Vite
- Lucide React
- UUID
- Browser LocalStorage
- Native HTML Drag and Drop API

## ⚙️ State Management

The application uses `useReducer` for the two main collections:

- `tasks`: create, update, delete, complete, and move tasks between boards.
- `boards`: create and delete boards.

`useEffect` saves each collection to `localStorage` whenever it changes, so tasks and boards remain available after refreshing the page.

## ▶️ Running Locally

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## 📂 Project Structure

```text
src/
├── components/
│   ├── Board.jsx
│   ├── Task.jsx
│   ├── EditTask.jsx
│   ├── NewTask.jsx
│   ├── NewBoard.jsx
│   ├── AddTaskButton.jsx
│   ├── FormButton.jsx
│   ├── InputText.jsx
│   ├── ButtonMenu.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```
