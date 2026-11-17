# TaskFlow

A simple TODO application built using HTML, CSS, and JavaScript as a school project. TaskFlow allows users to manage their daily tasks with basic CRUD functionality and browser localStorage.

## About the Project

TaskFlow is a beginner-level web development project created to practice fundamental concepts of HTML, CSS, and JavaScript.

The application provides a simple interface where users can add, view, edit, delete, and mark tasks as completed. It uses the browser's localStorage to save tasks, allowing data to persist even after refreshing the page.

## Features

- Add new tasks
- View all tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks by All, Pending, and Completed
- Save tasks using localStorage
- Responsive user interface

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser localStorage API

## Project Structure

```text
todo-app/
├── index.html
├── style.css
└── script.js
```

## Getting Started

### Installation

1. Clone this repository:

```bash
git clone https://github.com/xunjra/TODO-APP.git
```

2. Navigate to the project directory:

```bash
cd TODO-APP
```

3. Open `index.html` in your browser.

No additional dependencies or installations are required.

## How It Works

The application uses JavaScript to manage tasks through an array of objects.

Each task contains:

- `id`: Unique task identifier
- `title`: Task description
- `completed`: Completion status

Task data is converted into JSON and stored in the browser's localStorage. When the application loads, the saved data is retrieved and displayed.

## Learning Objectives

This project was created to practice:

- HTML structure and forms
- CSS styling and responsive design
- JavaScript DOM manipulation
- Event handling
- Array methods such as `map()`, `filter()`, and `find()`
- CRUD operations
- JSON data handling
- Browser localStorage

## Limitations

- Data is stored locally in the browser.
- Tasks are not synchronized across devices.
- Clearing browser storage will remove saved tasks.

## Project Status

Completed as a basic school web development project.

## License

This project is available for educational and learning purposes.
