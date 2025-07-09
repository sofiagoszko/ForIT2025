import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

interface Task{
    id: string,
    title: string, 
    description: string,
    complete: boolean,
    createdAt: Date
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks`)
      .then(res => res.json())
      .then(setTasks);
  }, []);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}