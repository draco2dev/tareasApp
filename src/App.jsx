import { useState ,  useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Lista from "./components/Lista";


function App() {
  const [tareas, setTareas] = useState([]);
  // se crea el objeto
  const [tarea, setTarea] = useState({});

  useEffect(() => {

    const obtenerTareasLocalStorage = () => {
      const tarealocalStorage =
        JSON.parse(localStorage.getItem("tareas")) ?? [];
      setTareas(tarealocalStorage);
    };

    obtenerTareasLocalStorage();

  }, []);

  // local storage
  useEffect(() => {
    localStorage.getItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  //eliminar tareas

  const eliminarTareas = (id) => {
    // console.log('eliminando tarea ..', id);

    const leerTarea = tareas.filter((tarea) => tarea.id !== id);

    setTareas(leerTarea);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          // enviar tarea
          tarea={tarea}
          // fin
          tareas={tareas}
          setTareas={setTareas}
          //se pasa del fron update
          setTarea={setTarea}
        />
        <Lista
          tareas={tareas}
          setTarea={setTarea}
          eliminarTareas={eliminarTareas}
        />
      </div>
    </div>
  );
}

export default App;
