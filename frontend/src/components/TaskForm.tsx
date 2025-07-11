import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function TaskForm(){
  type Errors = {
    title?: string;
    description?: string;
  };


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const {taskID} = useParams();
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

    const title_page = () => {
      if(taskID){
          return <h2 className='text-center'>Actualizar Tarea</h2>
      }else{
          return <h2 className='text-center'>Nueva Tarea</h2>
      }
    }

  return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
            <div className="card shadow-sm p-4">
              <div className="card-body">
                <h1>{title_page()}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="title">
                        Titulo <span className="text-danger">*</span>
                      </label>
                      <input className="form-control" type="text" id="title" placeholder="Ingresa el título de la tarea" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                      {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
                    </div>

                    <div className="mb-3">
                      <label htmlFor="description">
                        Descripción <span className="text-danger">*</span>
                      </label>
                      <textarea className="form-control" placeholder="Ingresa la descripción de la tarea" id="floatingTextarea" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                      {errors.description && <p style={{ color: "red" }}>{errors.description}</p>}
                    </div>


                  <div className="d-flex justify-content-evenly mt-3">
                    <Link to="/" className="btn btn-danger">
                      Cancelar
                    </Link>
                    <button type="submit" className="btn btn-success">
                      Aceptar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};