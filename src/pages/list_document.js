import { Image } from "@mui/icons-material"
import { Avatar, Divider, List, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// lista os documentos de determinado usuario
export default function ListDocument(){
    const [certificados, setCertificados] = useState([])
    let navigate = useNavigate()
    useEffect(()=>{
        setCertificados([
            {
                previous_hash: "1CE651A6E16AEB1AE64AB11E6AE9ABEEA132F1E65789BE41FB654A",
                name: "Palestra X (2022)",
                data: "a98ec7f1cef98c4f91c6d",
                block_type: 1,
                date: new Date(),
            },
            {
                previous_hash: "789BE41FB654AEB1AE64ABAAE9ABEEA132F1E6511E61CE651A6E16",
                name: "Estagio - Empresa Y (09-2020 / 12-2020)",
                data: "f91c6df9a98ec8c7f1ce4",
                block_type: 1,
                date: new Date(),
            },
            {
                previous_hash: "A6E16789BE11E61CE651B654AEB1AE64ABAAE9ABEEA41F132F1E65",
                name: "Curso Z - Empresa W (30hrs, 2023)",
                data: "c4f9a9f1c6d81cef98ec7",
                block_type: 2,
                date: new Date(),
            },
            {
                previous_hash: "789BE41FB654AEB1AE64ABAAE9ABEEA132F1E6511E61CE651A6E16",
                name: "Estagio - Empresa Y (09-2020 / 12-2020)",
                data: "f91c6df9a98ec8c7f1ce4",
                block_type: 1,
                date: new Date(),
            },
            {
                previous_hash: "A6E16789BE11E61CE651B654AEB1AE64ABAAE9ABEEA41F132F1E65",
                name: "Curso Z - Empresa W (30hrs, 2023)",
                data: "c4f9a9f1c6d81cef98ec7",
                block_type: 2,
                date: new Date(),
            },
            {
                previous_hash: "789BE41FB654AEB1AE64ABAAE9ABEEA132F1E6511E61CE651A6E16",
                name: "Estagio - Empresa Y (09-2020 / 12-2020)",
                data: "f91c6df9a98ec8c7f1ce4",
                block_type: 1,
                date: new Date(),
            },
            {
                previous_hash: "A6E16789BE11E61CE651B654AEB1AE64ABAAE9ABEEA41F132F1E65",
                name: "Curso Z - Empresa W (30hrs, 2023)",
                data: "c4f9a9f1c6d81cef98ec7",
                block_type: 2,
                date: new Date(),
            },
            {
                previous_hash: "789BE41FB654AEB1AE64ABAAE9ABEEA132F1E6511E61CE651A6E16",
                name: "Estagio - Empresa Y (09-2020 / 12-2020)",
                data: "f91c6df9a98ec8c7f1ce4",
                block_type: 1,
                date: new Date(),
            },
            {
                previous_hash: "A6E16789BE11E61CE651B654AEB1AE64ABAAE9ABEEA41F132F1E65",
                name: "Curso Z - Empresa W (30hrs, 2023)",
                data: "c4f9a9f1c6d81cef98ec7",
                block_type: 2,
                date: new Date(),
            },
            {
                previous_hash: "789BE41FB654AEB1AE64ABAAE9ABEEA132F1E6511E61CE651A6E16",
                name: "Estagio - Empresa Y (09-2020 / 12-2020)",
                data: "f91c6df9a98ec8c7f1ce4",
                block_type: 1,
                date: new Date(),
            },
            {
                previous_hash: "A6E16789BE11E61CE651B654AEB1AE64ABAAE9ABEEA41F132F1E65",
                name: "Curso Z - Empresa W (30hrs, 2023)",
                data: "c4f9a9f1c6d81cef98ec7",
                block_type: 2,
                date: new Date(),
            },
            {
                previous_hash: "789BE41FB654AEB1AE64ABAAE9ABEEA132F1E6511E61CE651A6E16",
                name: "Estagio - Empresa Y (09-2020 / 12-2020)",
                data: "f91c6df9a98ec8c7f1ce4",
                block_type: 1,
                date: new Date(),
            },
            {
                previous_hash: "A6E16789BE11E61CE651B654AEB1AE64ABAAE9ABEEA41F132F1E65",
                name: "Curso Z - Empresa W (30hrs, 2023)",
                data: "c4f9a9f1c6d81cef98ec7",
                block_type: 2,
                date: new Date(),
            },
            {
                previous_hash: "789BE41FB654AEB1AE64ABAAE9ABEEA132F1E6511E61CE651A6E16",
                name: "Estagio - Empresa Y (09-2020 / 12-2020)",
                data: "f91c6df9a98ec8c7f1ce4",
                block_type: 1,
                date: new Date(),
            },
            {
                previous_hash: "A6E16789BE11E61CE651B654AEB1AE64ABAAE9ABEEA41F132F1E65",
                name: "Curso Z - Empresa W (30hrs, 2023)",
                data: "c4f9a9f1c6d81cef98ec7",
                block_type: 2,
                date: new Date(),
            },
            {
                previous_hash: "789BE41FB654AEB1AE64ABAAE9ABEEA132F1E6511E61CE651A6E16",
                name: "Estagio - Empresa Y (09-2020 / 12-2020)",
                data: "f91c6df9a98ec8c7f1ce4",
                block_type: 1,
                date: new Date(),
            },
            {
                previous_hash: "A6E16789BE11E61CE651B654AEB1AE64ABAAE9ABEEA41F132F1E65",
                name: "Curso Z - Empresa W (30hrs, 2023)",
                data: "c4f9a9f1c6d81cef98ec7",
                block_type: 2,
                date: new Date(),
            },
            {
                previous_hash: "789BE41FB654AEB1AE64ABAAE9ABEEA132F1E6511E61CE651A6E16",
                name: "Estagio - Empresa Y (09-2020 / 12-2020)",
                data: "f91c6df9a98ec8c7f1ce4",
                block_type: 1,
                date: new Date(),
            },
            {
                previous_hash: "A6E16789BE11E61CE651B654AEB1AE64ABAAE9ABEEA41F132F1E65",
                name: "Curso Z - Empresa W (30hrs, 2023)",
                data: "c4f9a9f1c6d81cef98ec7",
                block_type: 2,
                date: new Date(),
            }
        ])
    }, [])



    return (
        <>
        <List  sx={{
        /* update
        width: '100%',
        maxWidth: {xs:"90%", sm: "90%", md:"80%", lg:"60%"},
        bgcolor: "#AAA",
        borderRadius:".5em",
        overflow: 'auto',
        */
        
      }}  component="nav" aria-label="secondary">
            {certificados.map((c)=>{
                return (<div key={c.previous_hash}>
                    <ListItemButton  onClick={()=>{navigate("/get-document", {state:{e:c}})}}>
                        <ListItemIcon>
                            <Image  src="https://img.ibxk.com.br/2012/6/programas/35335.jpg" />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="h4" >{c.name}</Typography>} secondary={<>
                            <Typography variant="h5" >Adas SDdd</Typography>
                            <Typography variant="body">{c.data}</Typography>
                        </>}></ListItemText>
                    </ListItemButton>
                    <Divider  /></div>)
            })} 
        </List>
        </>
    )
}