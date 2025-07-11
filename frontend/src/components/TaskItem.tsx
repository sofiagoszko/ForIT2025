import { useEffect, useState } from "react";
import type { Task } from "../Types";
import { Link, useParams } from "react-router-dom";

export default function TaskItem() {  
  const [task, setTask] = useState<Task | null>(null);
  const {id} = useParams();

  useEffect(() => {
    if(id){
      fetch(`${import.meta.env.VITE_API_URL}/tasks`)
        .then((res) => res.json())
        .then((tasks) => {
          const foundTask = tasks.find((t: Task) => t.id === id);
          if(foundTask){
            setTask(foundTask);
          }
        });
    }
  }, [id]);

  if (!task) {
    return <p className="text-center">Cargando tarea...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
        <div className="card shadow-sm p-4">
          <div className="card-body">
            <h1 className="text-center">{task.title}</h1>
            <p><strong>Descripción:</strong> {task.description}</p>
            <p><strong>Estado:</strong> {task.complete ? "Finalizada" : "Abierta"}</p>
            <p><strong>Fecha de creación:</strong> {new Date(task.createdAt).toLocaleString()}</p>
            <div className="mt-3">
              <Link to="/tasks" className="btn btn-primary">Volver</Link>
            </div>
          </div>
        </div>
      </div>
    </div>      
  );
}