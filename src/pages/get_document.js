import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

function Typo({textA, textB}){
    const maxLength = 40;
    return <Typography variant="h2">{textA}: {textB.length>maxLength?textB.substring(0,maxLength)+"...": textB}</Typography>
}

export default function GetDocument(){
    const location  = useLocation()
    console.log(location)
    return (
        <>
            <Typo textA="Nome" textB={location.state.e.name} />
            <Typo textA="Hash Anterior" textB={location.state.e.previous_hash} />
            <Typo textA="Data checksum" textB={location.state.e.data} />
            <Typo textA="Data" textB={location.state.e.date.toLocaleString()} />
        </>
    )
}