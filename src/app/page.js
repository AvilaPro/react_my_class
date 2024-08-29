import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import ButtonsBoots from "./components/buttonsBoots";
import Featuretail from "./components/featureTail";

function Adsbar() {
  return(
    <>
      <div id="adsbar">
        <span>Envio gratis</span>
        <span>Prueba sin compromiso</span>
        <span>Garantia</span>
      </div>
    </>
  )
}

function Example() {
  return <div style={{height: '1500px'}}></div>
}

export default function Home() {
  return (
    <>
      <Adsbar />
      <Header />
      <ButtonsBoots />
      <Featuretail />
    </>
  );
}
