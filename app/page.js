//Importamos el componente creado por separado.
import { Header } from "./components/header";
import { Banner } from "./components/banner";
import { Downloads } from "./components/downloads";
import { News } from "./components/news";
import { Formulario } from "./components/formulario";

export default function Page() {
    let iconDifferent = {
        type: 'bi-explicit'
    };
    let apareceLogo = {
        talvez: true
    }
    return (
        <>
            <Header iconDesign={{type: iconDifferent.type}} />
            <Banner logo={{aparece: apareceLogo.talvez}}/>
            <Downloads />
            <News />
            <Formulario />
        </>
    ) 
        
}