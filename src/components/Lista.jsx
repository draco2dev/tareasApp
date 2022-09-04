import {useEffect} from 'react';

import Tarea from "./Tareas";

const Lista = ({ tareas, setTarea, eliminarTareas }) => {
  
//   useEffect ( () =>{
// // console.log('Iniciando')
// if(tareas.length>0){}
//   }, [tareas]);

  return (
    <div className="md:w-1/2 lg:w-2/5  mx-5 mb-10 md:h-screen overflow-scroll">
      {tareas && tareas.length ? (
        <>
          <h2 className="font-black text-3xl text-center mb-10">
            Lista de Tareas, Pendientes
          </h2>
          {tareas.map((tarea) => {
            return (
              // se puede de la siguienete manera
              //  <h1>{tareas.titulo}</h1>
              <Tarea
                //crea llave --
                key={tarea.id}
                tarea={tarea}
                setTarea={setTarea}
                eliminarTareas={eliminarTareas}
              />
            );
          })}
        </>
      ) : (
        <h2 className="font-black text-3xl text-center mb-10">
          No hay Tareas, Pendientes
        </h2>
      )}
    </div>
  );
};

export default Lista;
