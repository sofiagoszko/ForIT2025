export default function Home() {  
  return(
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <h1 className="text-center mb-4">BIENVENIDO</h1>
        <img src="/cat.jpg" alt="Gato" className="img-fluid"  style={{ maxWidth: "450px", height: "auto" }}/>
        <h2>Con esta aplicación podrás gestionar tus tareas facilmente</h2>
    </div>
  )
}