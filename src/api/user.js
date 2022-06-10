const api_url = process.env.REACT_APP_API_URL

async function login(email, password){
    const response = await axios.post(api_url+"/auth/register/", 
    {
        "email": "asdasd@asd.com", 
        "password":"454dasd545", 
        "username":"batatinha"}
        )
    try{
        return response.data
    }catch(e){
        console.log('ERRO // API/LOGIN \n'+e)
    }
    
}

function register(email, password, username){
    //
}

function logout(){
    //
}

export {login, register, logout}