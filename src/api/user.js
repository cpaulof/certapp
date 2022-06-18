import axios from 'axios'

const api_url = process.env.REACT_APP_API_URL

async function login(email, password){
    console.log(api_url+"/auth/login/")
    const response = await axios({
        url: api_url+"/auth/login/",
        method:"post",
        data:{
            email: email,
            password:password
        }
    })
    
    try{
        if(response.status===200)
            localStorage.setItem("credentials", JSON.stringify(response.data))
        return response.data
    }catch(e){
        console.log('ERRO // API/LOGIN \n'+e)
    }
    
}

async function register(email, password, username){
    const response = await axios.post(api_url+"/auth/register/", 
    {
        "email": "asdasd@asd.com", 
        "password":"454dasd545", 
        "username":"batatinha"}
        )
    try{
        return response.data
    }catch(e){
        console.log('ERRO // API/Register \n'+e)
    }
}

function logout(){
    //
}

export {login, register, logout}