'use client'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import styleMQ3 from "./metaq3.module.css";

//componente secundario para probar el paso de props al componente y al manejador de eventos
function ComponenteSecundario({funcALlamar, txtBtn}) {
  return (
    <button className='btn btn-primary btn-lg' onClick={funcALlamar}>{txtBtn}</button>
)
}

export default function Metaq3({dato}) {
  function funcALlamar() {
    alert(`Se informa el ${dato}`);
  }
  return (
    <>
      <div className={styleMQ3.bgimgContainer}>
        <div className={styleMQ3.elContainer}>
          <h1>Meta Quest 3</h1>
          <p>Con nuestras gafas de realidad mixta más potentes hasta la fecha podrás ver contenido, jugar y conectar con otras personas como nunca antes.</p>
          <ComponenteSecundario funcALlamar={funcALlamar} txtBtn={'Añadir a la bolsa'} />
        </div>
      </div>
    </>
  )
}