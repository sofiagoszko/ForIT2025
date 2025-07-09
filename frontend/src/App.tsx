import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/new-task">Nueva Tarea</Link>
        <Link to="/tasks">Ver Tareas</Link>
      </nav>
      <Routes>
        <Route path="/new-task" element={<TaskForm />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </Router>
  );
}

export default App
