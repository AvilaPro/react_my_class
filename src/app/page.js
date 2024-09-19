'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import ButtonsBoots from "./components/buttonsBoots";
import Featuretail from "./components/featureTail";
import Products from "./components/products/products";
import Video from "./components/video/video";
import { useState } from "react";

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
  const [isPlaying, setIsPlaying] = useState(false);
  //valor de variable prop que se enviará al componente hijo 'Products'
  let titleProductsSize = '3em'
  return (
    <>
      <Adsbar />
      <Header />
      {/* Se envia el valor de la propiedad titleProductsSize al componente Products */}
      <Products titleSize={titleProductsSize} />
      <hr/>
      <button className="btn btn-secondary" onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</button>
      <Video src={'https://scontent.xx.fbcdn.net/o1/v/t2/f2/m69/AQOuZugsD4Ld0qhDTTESo9iQtTckw5NqpLNFCDOUTANH1FVkrDnjmDqGzzn0g-lSlzdWWD0Olq14FBjm4ZVBhC4k.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video.fccs6-1.fna.fbcdn.net&_nc_cat=107&strext=1&vs=f7a392c0918e61d5&_nc_vs=HBkcFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRURSQlJ2RHlOQWxQZndDQUx2NFBtSEVOUVk4YnY0R0FBQUYVAALIAQBLB4gScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AHXVzZV9sYW5jem9zX2Zvcl92cW1fdXBzY2FsaW5nABFkaXNhYmxlX3Bvc3RfcHZxcwAVACUAHIwXQAAAAAAAAAAREQAAACaklt7AyZDxAxUCKANDM2UYC3Z0c19wcmV2aWV3HBdAE5mZmZmZmhgaZGFzaF9oMjY0LWJhc2ljLWdlbjJfMTA4MHASABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCogVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlFmJlc3RfdGllcl8xMDgwX2VuYWJsZWQTb2VtX3JvaV9yZWFjaF9jb3VudAMyNTERb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA83NTg4MjMyOTk1OTczNzgSb2VtX3ZpZGVvX2Fzc2V0X2lkEDEwNDQxNzcxODAxODMyODkVb2VtX3ZpZGVvX3Jlc291cmNlX2lkEDEwOTMxOTkzMDE2OTA3NzAcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZBAxNDA0MTQ3ODA2ODk1OTg5DnZ0c19yZXF1ZXN0X2lkACUCHAAlvgEbB4gBcwQxNzk4AmNkCjIwMjMtMTItMjYDcmNiAzIwMANhcHAGVsOtZGVvAmN0EUNNU19NRURJQV9NQU5BR0VSE29yaWdpbmFsX2R1cmF0aW9uX3MDNC45AnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA&ccb=9-4&oh=00_AYDSm1bvABeoOo9ODXg8wOOOlwI_9s-3DB_1ZTUDuo4PXg&oe=66EE759A&_nc_sid=1d576d&_nc_rid=723199527976048&_nc_store_type=1'} isPlaying={isPlaying} />
      {/* <ButtonsBoots /> */}
      {/* <Featuretail /> */}
    </>
  );
}
