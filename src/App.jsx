import { useState } from 'react'
import './App.css'
//import peliculasData from "./peliculas-v2.js";
import peliculasData from "./db/peliculas-v1.json";
import TarjetaPeli from "./TarjetaPeli.jsx"
import SaludoComponent from "./SaludoComponent.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Examen programacion web 1 - ISSRC 2025</p>
        <p>Prof. Pablo Arona - Estud. Fernando Fontana</p>
      </div>

    <div className="contenedor-catalogo">
      <h1>Peliculas</h1>

      <div className="grid-peliculas">
        {peliculasData
          .filter((peli) => peli.visible)   // Solo las visibles
          .map((peli) => (
            <TarjetaPeli
              key={peli.id}
              titulo={peli.titulo}
              genero={peli.genero}
              rating={peli.rating}
              imagen={peli.imagen}
              duracion={peli.duracion}
              argumento={peli.descripcion}
            />
          ))}



      </div>
    </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
