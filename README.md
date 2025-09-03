
# Vue Todo List App

A simple full-stack Todo List application built with Vue 3, Vite, Remult, and Express. This project is designed for developers practicing their web development skills. It covers basic CRUD operations, live updates, and a modern UI.

## Features
- Add, edit, complete, and delete tasks
- Mark all tasks as complete/incomplete
- Clear all tasks
- See how long ago each task was created
- Live updates using Remult
- Express server for backend API


## Getting Started

### Prerequisites
- Node.js (see `package.json` for required version)
- npm

### Installation
1. Clone the repository:
	```sh
	git clone https://github.com/jrs213/Task-List.git
	cd vue-todo
	```
2. Install dependencies:
	```sh
	npm install
	```

### Running the App
Start both the backend server and the frontend together:
```sh
npm run dev
```
- The Express server will run on its configured port (see `src/server`)
- The Vite frontend will run on [http://localhost:5173](http://localhost:5173) by default

### Project Structure
```
vue-todo/
├── src/
│   ├── App.vue           # Main Vue component
│   ├── main.ts           # App entry point
│   ├── assets/           # Images and CSS
│   ├── server/           # Express backend
│   │   ├── api.ts
│   │   └── index.ts
│   └── shared/           # Shared models/controllers
│       ├── Task.ts
│       └── TasksController.ts
├── db/
│   └── tasks.json        # Local DB for tasks
├── public/
│   └── favicon.ico
├── package.json
├── tsconfig*.json
├── vite.config.ts
└── README.md
```

## Customization
- Change colors and styles in `src/App.vue` and `src/assets/main.css`
- Modify backend logic in `src/server/`
- Update task model in `src/shared/Task.ts`

## Useful Commands
- `npm run dev` — Start server and frontend
- `npm run build` — Build frontend for production
- `npm run preview` — Preview production build

## Learning Resources
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Remult Documentation](https://remult.dev/)
- [Express Documentation](https://expressjs.com/)



---

This project is for learning and practice. Feel free to experiment, break things, and improve your skills!
