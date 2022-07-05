import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"
//imagens
import sebrae from "../img/sebrae-logo.png";
import cisco from "../img/cisco-logo.png";
import estacio from "../img/estacio-logo.png";
import iel from "../img/iel-logo.png";
import certificado from "../img/certificado2-logo.png";

function Typo({textA, textB}){
    const maxLength = 40;
    return <Typography variant="h2">{textA}: {textB.length>maxLength?textB.substring(0,maxLength)+"...": textB}</Typography>
}

export default function GetDocument(){
    const location  = useLocation()
    console.log(location)
    return (
        <>
            <img src={certificado} alt="logo" id = "empresa"/>
            <Typo textA="Nome" textB={location.state.e.name} />
            <Typo textA="Hash Anterior" textB={location.state.e.previous_hash} />
            <Typo textA="Data checksum" textB={location.state.e.data} />
            <Typo textA="Data" textB={location.state.e.date.toLocaleString()} />
        </>
    )
}