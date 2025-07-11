import "./App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import Home from "./Home";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <HeaderComponent />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/tasks" element={<TaskList />}></Route>
            <Route path="/new-task" element={<TaskForm />}></Route>
            <Route path="/edit-task/:id" element={<TaskForm />}></Route>
            <Route path="/task/:id" element={<TaskItem />}></Route>
          </Routes >
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App