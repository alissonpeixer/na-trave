import { Grow } from "@mui/material"
import axios from "axios"
import { UserCircle } from "phosphor-react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAsyncFn } from "react-use"
import { Header } from "../../components/Header"


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
                        <button
                            key={user.id}
                            onClick={() => goToProgfile(user.username)}
                            className="cursor-pointer transition-all h-36 w-full xl:w-[600px] border my-2 border-gray-100 text-white  rounded-xl  hover:border-red-300 hover:text-red-200 bg-csBlur  ">

                            <div className="flex items-center  max-w-full p-4  w-full  ">
                                <UserCircle size={100} weight="duotone" className=" flex-1 min-w-[40px] " />
                                <div className="flex  gap-3 flex-col w-1/2">
                                    <span >{user.name}</span>
                                    <span>@{user.username}</span>
                                </div>
                            </div>

                        </button>
                    </Grow>
                ))

                }


            </div>
        </main >
    )
}