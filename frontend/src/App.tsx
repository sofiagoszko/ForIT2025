import "./App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path="/tasks" element={<TaskList />}></Route>
            <Route path="/new-task" element={<TaskForm />}></Route>
            <Route path="/edit-task/:id" element={<TaskForm />}></Route>
          </Routes >
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App