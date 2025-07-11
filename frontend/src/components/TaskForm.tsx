import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TaskForm(){
  type Errors = {
    title?: string;
    description?: string;
  };


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try{
      const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, description}),
      });

      if(!response.ok){
        const data = await response.json();
        setErrors(data.errors || {});
      }else{
        navigate("/tasks");
      }
    }catch (err){
      console.error("ERROR ", err);
    }
  };

  return (
      <section>
        <h1>Alta nueva tarea</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="title">
                Titulo <span className="text-danger">*</span>
              </label>
              <input type="text" id="title" placeholder="Ingresa el título de la tarea" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
          </div>

          <div>
            <div>
              <label htmlFor="description">
                Descripción <span className="text-danger">*</span>
              </label>
              <textarea placeholder="Ingresa la descripción de la tarea" id="floatingTextarea" value={description} onChange={(e) => setDescription(e.target.value)} required/>
            </div>
            {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
          </div>

          <div className="d-flex justify-content-around mb-5">
            <Link to="/" className="btn btn-secondary">
              Cancelar
            </Link>
            <button type="submit" className="btn btn-success">
              Aceptar
            </button>
          </div>
        </form>
      </section>
  );
};