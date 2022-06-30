export default function Document({c}){
    return (
        <ListItemText primary={c.name} secondary={c.data}/>
    )
}