import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import ButtonsBoots from "./components/buttonsBoots";
import Featuretail from "./components/featureTail";
import Products from "./components/products/products";
import Metaq3 from "./components/metaQ3/metaq3";

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
  //valor de variable prop que se enviará al componente hijo 'Products'
  let titleProductsSize = '3em'
  return (
    <>
      <Adsbar />
      <Header />
      {/* Se envia el valor de la propiedad titleProductsSize al componente Products */}
      <Products titleSize={titleProductsSize} />
      <Metaq3 dato={'comprame ahora!'} />
      {/* <ButtonsBoots /> */}
      {/* <Featuretail /> */}
    </>
  );
}
