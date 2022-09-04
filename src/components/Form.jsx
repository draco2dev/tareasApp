import { useState, useEffect } from "react";
import Alert from "./Alert";

const Form = ({ tareas, setTareas, tarea, setTarea }) => {

  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");
  // const [titulo, setTitulo] = useState('')

  //estado para alerta
  const [error, setError] = useState(false);


  // generar id
  const generarId = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  };

  //usp del useEffect
  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setTitulo(tarea.titulo);
      setFecha(tarea.fecha);
      setDescripcion(tarea.descripcion);
      // alert('se lleno mi formulario')
    }
    // }else{
    //   console.log("No tenemos tarea ")
    // }
  }, [tarea]);



  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Enviando Datos .");
    if ([titulo].includes("")) {
      alert("Falta Titulo.");
      setError(true);
      return;
    } else if ([fecha].includes("")) {
      alert("Falta Fecha.");
      setError(true);
      return;
    } else if ([descripcion].includes("")) {
      alert("Falta Descripcion.");
      setError(true);
      return;
    } else {
      alert("Enviando Datos .");
    }

    setError(false);

    // objeto de tareas
    const objetoTareas = {
      titulo,
      fecha,
      descripcion,
      // id: generarId(),
    };

    // editando  y nuevo registro

    if (tarea.id) {

      // apuntar el id 
      objetoTareas.id = tarea.id; 


      // editar la tarea 
      const tareasActualizadas = tareas.map((tareaState) =>
        tareaState.id === tarea.id ? objetoTareas : tareaState);

      setTareas(tareasActualizadas);
      setTarea({});
    } else {

      // Nueva Tarea
      // // generar id con la tarea
      objetoTareas.id = generarId();

      // enviar datos por props //  ... operator
    setTareas([...tareas, objetoTareas]);
      
    }

    //para limpiar el formulario 
    setTitulo("");
    setFecha("");
    setDescripcion("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center mb-5">
        Creacion de Pendientes
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Alert> Faltan Campos por Diligenciar </Alert>}
        <div className="md-5">
          <label
            htmlFor="Titulo"
            className="block text-gray-700 uppercase font-bold"
          >
            Titulo
          </label>
          <input
            id="Titulo"
            type="text"
            placeholder="Titulo de la tarea"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="md-5">
          <label
            htmlFor="Fecha"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha
          </label>
          <input
            id="Fecha"
            type="date"
            // placeholder="Titulo de la tarea"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="md-5">
          <label
            htmlFor="Descripcion"
            className="block text-gray-700 uppercase font-bold"
          >
            Descripcion
          </label>
          <textarea
            id="Descripcion"
            type="text"
            placeholder="Descripcion de la tarea"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        {tarea.id ? (
          <input
            type="submit"
            className="bg-red-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-800 transition-colors cursor-pointer "
            value="Actualizar Tarea"
          />
        ) : (
          <input
            type="submit"
            className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-blue-800 transition-colors cursor-pointer "
            value="Crear Tarea"
          />
        )}
      </form>
    </div>
  );
};

export default Form;
