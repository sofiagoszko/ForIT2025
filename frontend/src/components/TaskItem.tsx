interface Task{
    id: string,
    title: string, 
    description: string,
    complete: boolean,
    createdAt: Date
}

export default function TaskItem({ task }: { task: Task }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p><strong>Descripción:</strong> {task.description}</p>
      <p><strong>Estado:</strong> {task.complete ? "Finalizada" : "Abierta"}</p>
      <p><strong>Fecha de creación:</strong> {new Date(task.createdAt).toLocaleString()}</p>
    </div>
  );
}