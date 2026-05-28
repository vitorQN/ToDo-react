# FrontTodo

React frontend for a simple To-Do application. The app lets users list, create, edit, and delete tasks through a REST API.

## Overview

This project is a Create React App frontend built with React 18. It renders a compact task manager UI with:

- Task list loaded from the backend API
- New task creation
- Existing task editing through a modal
- Task deletion
- Dark glass-style interface defined in `src/App.css`

## Tech Stack

- React 18
- Create React App / `react-scripts`
- Fetch API for backend requests
- Standard CSS imported into React components
- React Testing Library setup from Create React App

## Requirements

Before running the project, install:

- Node.js
- npm

The project already includes `package-lock.json`, so prefer `npm install` for local setup.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open the app in your browser:

```text
http://localhost:3000
```

The page reloads automatically when source files change.

## Available Scripts

### `npm start`

Runs the app in development mode at `http://localhost:3000`.

### `npm test`

Starts the test runner in interactive watch mode.

### `npm run build`

Creates an optimized production build in the `build` folder.

### `npm run eject`

Exposes the Create React App build configuration. This is irreversible and should only be used if the project needs full control over Webpack, Babel, ESLint, and related tooling.

## Project Structure

```text
fronttodo/
|-- public/
|-- src/
|   |-- components/
|   |   |-- TaskItem.jsx
|   |   `-- TaskModal.jsx
|   |-- services/
|   |   `-- api.js
|   |-- App.css
|   |-- App.js
|   |-- App.test.js
|   |-- index.css
|   |-- index.js
|   |-- reportWebVitals.js
|   `-- setupTests.js
|-- package.json
|-- package-lock.json
`-- README.md
```

## Main Files

- `src/App.js` contains the main application state and task actions.
- `src/components/TaskItem.jsx` renders a single task row with edit and delete actions.
- `src/components/TaskModal.jsx` renders the edit task modal.
- `src/services/api.js` centralizes backend requests.
- `src/App.css` contains the main UI styles.

## Backend API

The frontend currently uses this API base URL:

```js
https://to-do-java-production.up.railway.app/tasks
```

The API methods are defined in `src/services/api.js`.

Expected endpoints:

| Action | Method | Endpoint | Body |
| --- | --- | --- | --- |
| List tasks | `GET` | `/tasks` | none |
| Create task | `POST` | `/tasks` | `{ "title": "Task title" }` |
| Update task | `PUT` | `/tasks/:id` | `{ "title": "Updated title" }` |
| Delete task | `DELETE` | `/tasks/:id` | none |

Expected task shape:

```json
{
  "id": 1,
  "title": "Example task"
}
```

## Frontend Flow

1. `App.js` loads tasks when the component mounts.
2. `getTasks()` fetches all tasks from the API.
3. The task list is rendered with `TaskItem`.
4. Creating a task calls `createTask(title)` and refreshes the list.
5. Editing opens `TaskModal`, then calls `updateTask(id, title)` and refreshes the list.
6. Deleting calls `deleteTask(id)` and refreshes the list.

## Development Notes

- Keep API-related code inside `src/services/api.js`.
- Keep reusable UI pieces inside `src/components`.
- When adding new task fields, update both the API service and the relevant components.
- The current API URL is hardcoded. For multiple environments, move it to an environment variable such as `REACT_APP_API_URL`.

Example:

```js
const BASE_URL = process.env.REACT_APP_API_URL || "https://to-do-java-production.up.railway.app/tasks";
```

Then create a local `.env` file:

```bash
REACT_APP_API_URL=http://localhost:8080/tasks
```

## Build

Create a production build:

```bash
npm run build
```

The generated files will be placed in:

```text
build/
```

## Testing

Run the test suite:

```bash
npm test
```

Create React App runs tests in watch mode by default. For CI usage, run:

```bash
npm test -- --watchAll=false
```
