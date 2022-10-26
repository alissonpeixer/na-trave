import axios from "axios"

type ResTypes = {
    valid: boolean,
    name:string,
    username: string,
    id: string,
    acessToken: string,
}

interface Props {
    acessToken: string,
    id: string,
    name: string,
    username: string
}

export const getUserSession = async (params  : Props) => {
    if(!params){
        window.location.href = "/" 
        return 
    }

   await axios({
        method: 'get',
        baseURL: `${import.meta.env.VITE_API_HOST}`,
        url: '/u/auth',
        headers:{
            auth: `Bearer ${params.acessToken}`
        }
    })
    .then((res )  =>{    
        localStorage.setItem('session',res.data.valid)    
         
        return 
    })
    .catch((error) =>{
        localStorage.setItem('auth',JSON.stringify(false))
        localStorage.setItem('session',JSON.stringify(false))  
        window.location.href = "/" 
        alert('Sua sessão expirou!')
        return
    })

}