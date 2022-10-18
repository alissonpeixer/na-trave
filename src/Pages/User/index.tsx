import { Grow } from "@mui/material"
import axios from "axios"
import { UserCircle } from "phosphor-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAsyncFn } from "react-use"
import { Header } from "../../components/Header"
import { ErrorPage } from "../ErrorPage"


export const User = () => {
    const navegate = useNavigate()

    const goToProgfile = (e: any) => {

        navegate(`/user/${e}`)

    }

    const [user, userFetch] = useAsyncFn(async () => {

        const res = await axios({
            method: 'get',
            baseURL: `${import.meta.env.VITE_API_HOST}`,
            url: '/users',

        })

        return res.data
    })

    useEffect(() => {
        userFetch()
    }, [])

    return (
        <main className="min-h-screen flex flex-col items-center  bg-white">
            <div className="bg-red-100  w-full drop-shadow-lg">

                <div className="mx-auto container">
                    <Header
                        colorLogo="wine"
                    />
                </div>

            </div>
            <div className="container mx-auto px-3 flex flex-col items-center min-h-screen">

                {user.value?.map((user: any) => (
                    <Grow in={true}>
                        <div
                            key={user.id}
                            onClick={() => goToProgfile(user.username)}
                            className="cursor-pointer transition-all h-36 w-full xl:w-[600px] border my-2 border-gray-100 text-red-100 text-base rounded-xl flex flex-col items-center justify-center gap-5">
                            <div className="flex gap-5 flex-col">
                                <UserCircle size={40} weight="duotone" />


                                <div>
                                    <div className='transition-all uppercase md:text-xl'>Name: {user.name}</div>
                                    <div className='transition-all uppercase md:text-xl'>Username: {user.username}</div>
                                </div>

                            </div>
                        </div>
                    </Grow>
                ))

                }


            </div>
        </main >
    )
}