export default function HeaderComponent(){
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div className="ms-3">
                    <a href="/" className='navbar-brand'>Inicio</a>
                    <a href="/tasks" className='navbar-brand'>Listar Tareas</a>
                    <a href="/new-task" className='navbar-brand'>Nueva Tarea</a>
                </div>
            </nav>
        </header>
    </div>
  )
};
