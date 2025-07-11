import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import type { Task } from "../Types";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks`)
      .then(res => res.json())
      .then(setTasks);
  }, []);

  const toggleTaskStatus = (taskID: string) => {
    Swal.fire({
      title: '¿Estás seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/tasks/${taskID}`, {
          method: "DELETE",
        })
        .then((res) => {
          if (!res.ok) throw new Error("Error al cambiar el estado de la tarea");
          return res.json();
        })
        .then((updatedTask) => {
          setTasks((prevTasks) =>
            prevTasks.map((task) =>
              task.id === taskID ? { ...task, complete: updatedTask.complete } : task
            )
          );

          Swal.fire(
            '¡Actualizado!',
            `La tarea ahora está ${updatedTask.complete ? "finalizada" : "abierta"}`,
            'success'
          );
        })
        .catch((error) => {
          console.error(error);
          Swal.fire(
            'Error!',
            'Hubo un problema al cambiar el estado de la tarea.',
            'error'
          );
        });
      }
    });
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Lista de Tareas</h1>
      <Link to="/new-task" className="btn btn-primary mb-2">Nueva Tarea</Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th>Alta</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => 
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.complete ? "Finalizada" : "Abierta"}</td>
              <td>{new Date(task.createdAt).toLocaleString()}</td>
              <td>
                <Link className='btn btn-info' to={`/edit-task/${task.id}`}>Actualizar</Link>
                <button style={{ marginLeft: "10px" }} className={`btn ${task.complete ? "btn-warning" : "btn-danger"}`} onClick={() => toggleTaskStatus(task.id)}>
                  {task.complete ? "Activar" : "Finalizar"}
              </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}