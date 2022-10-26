import axios from "axios"

interface Props {
    acessToken: string,
    id: string,
    name: string,
    username: string
}

export const getUserSession = async (params  : Props) => {

   await axios({
        method: 'get',
        baseURL: `${import.meta.env.VITE_API_HOST}`,
        url: '/u/auth',
        headers:{
            auth: `Bearer ${params.acessToken}`
        }
    })
    .then((res) =>{
        console.log(res)

        return
    })
    .catch((error) =>{
        console.log(error)

        alert('Sua sessão expirou!')
        return
    })

}