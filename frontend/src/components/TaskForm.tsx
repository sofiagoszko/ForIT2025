import { Link } from "react-router-dom";

export default function TaskForm(){
  return (
      <section>
        <h1>Alta nueva tarea</h1>
        <form
        >
          <div>
            <div>
              <label htmlFor="title">
                Titulo <span className="text-danger">*</span>
              </label>
              <input type="text" id="title" placeholder="Ingresa el título de la tarea" required/>
            </div>
          </div>

          <div>
            <div >
              <label htmlFor="description">
                Descripción <span className="text-danger">*</span>
              </label>
              <div>
                <textarea placeholder="Ingresa la descripción de la tarea" id="floatingTextarea" required/>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-around mb-5">
            <Link to="/home" className="btn btn-secondary">
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