//Importamos el componente creado por separado.
import { Header } from "./components/header";
import { Banner } from "./components/banner";
import { News } from "./components/news";

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
            <News />
        </>
    ) 
        
}