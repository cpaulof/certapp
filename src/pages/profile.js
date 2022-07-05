import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../components/navbar"
import user_img from "../img/user.png";

export default function Profile(){

    let data = localStorage.getItem("credentials")
    const [user, setUser] = useState({})
    data = JSON.parse(data?data:"{}")
    let navigate = useNavigate()
    useEffect(()=>{
        if(!data.access) 
            navigate("/login")
        else
            setUser(data.user)
        
    }, [])
   
    return (
        <>
        <div>
            <NavBar />
            <img src={user_img} alt="logo"/>
            <h2>Usuario: {user.username}</h2>
            <Button variant="outlined"  onClick={()=>{navigate("/list-document")}}>Meus Certificados</Button>
            <Button variant="contained" color="secondary" onClick={()=>{localStorage.setItem("credentials", "{}")}} >Sair</Button>

        </div>
        </>
    )
}