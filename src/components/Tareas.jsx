const Tarea = ({ tarea, setTarea, eliminarTareas }) => {
  const { titulo, fecha, descripcion, id } = tarea;

  //lamdo de la tarea
  const handleEliminar = () =>{
    const consulta = confirm('Esta seguro de eliminar')

    if (consulta){
      eliminarTareas(id);
    }
// console.log('Eliminar',id)
  }


  // console.log(tareas)
  return (
    <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Titulo: <samp className="font-normal  normal-case">{titulo}</samp>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: <samp className="font-normal  normal-case"> {fecha}</samp>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Descripción:{" "}
        <samp className="font-normal  normal-case"> {descripcion}</samp>
      </p>
      {/* //md:flex bg-blue-500 text-white text-sm font-bold px-4 py-3 */}
      <div>
        <button
          className="px-4 py-3 text-sm mr-5 bg-blue-500 text-white rounded-md hover:bg-blue-800 transition-colors cursor-pointer font-bold"
          type="button"
          onClick={() => setTarea(tarea)}
        >
          Actualizar
        </button>
        <button
          className="px-4 py-3 text-sm bg-red-500 text-white rounded-md hover:bg-blue-800 transition-colors cursor-pointer font-bold"
          type="button"
          onClick={handleEliminar}
        >
          Elimnar
        </button>
      </div>
    </div>
  );
};

export default Tarea;
