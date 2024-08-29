import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header>
        <div>
          <Image 
            src="https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
            width={70}
            height={17}
          />
          <span>Meta Quest</span>
          <span>Ray-Ban Meta</span>
          <span>Aplicaciones y juegos</span>
        </div>
        <div>
          <span>Informacion sobre Meta</span>
          <span>Asistencia</span>
          <input placeholder="Buscar" />

        </div>
      </header>
    </>
  )
}