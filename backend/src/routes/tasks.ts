import { Router, Request, Response } from "express";
import { v4 as uuid } from "uuid";

interface Task{
    id: string,
    title: string, 
    descripcion: string,
    complete: boolean,
    createdAt: Date
}

function validate(title: string, descripcion: string): string[]{
    const errors: string[] = [];

    if(!title || title.trim() == ""){
        errors.push("Por favor ingrese un titulo válido");
    }
    if(!descripcion || descripcion.trim() == ""){
        errors.push("Por favor ingrese una descripción válida");
    }
    
    return errors;    
}

const tasks: Task[] = [];
const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json(tasks);
});

router.post("/", (req: Request, res: Response) => {
    const { title, descripcion } = req.body;
    const errors = validate(title, descripcion);

    if(errors.length>0){
        return res.status(400).json({ errors })
    }

    const newTask: Task = {
        id: uuid(),
        title: title, 
        descripcion: descripcion,
        complete: false,
        createdAt: new Date()
    };
    
    tasks.push(newTask);
    res.status(201).json(newTask);

});


router.delete("/:id", (req: Request, res: Response) => {
  const id = String(req.params.id);
  const task = tasks.find(t => t.id === id);

  if (!task) return res.status(404).json({ error: "No se encontró la tarea buscada" });

  task.complete = true;
  res.json(task);
});

export default router;