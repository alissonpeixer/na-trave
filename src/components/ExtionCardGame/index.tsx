import axios from "axios";
import el from "date-fns/esm/locale/el/index.js";
import { tr } from "date-fns/locale";
import { useSnackbar } from "notistack";
import { Heart, Trash } from "phosphor-react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { useAsyncFn, useLocalStorage } from "react-use"
import { ResponsiveDialog } from "../ResponsiveDialog";

export const ExtionCardGame = ({ data, onChange }: any) => {


    console.log(data)
    const [open, setOpen] = useState(false)

    const [confirmed, setConfirmed] = useState('')


    const location = useLocation();
    const [auth]: any = useLocalStorage('auth', false)

    const [likes, setLikes] = useState(data.Like.length)

    const [isLiked, setIsLiked] = useState(false)
    const { enqueueSnackbar } = useSnackbar();


    const [state, setState] = useAsyncFn(async (params) => {



        const res = await axios({
            method: 'patch',
            baseURL: `${import.meta.env.VITE_API_HOST}`,
            url: '/hunches/like',
            data: {
                params,
                hunchId: data.id,
                userId: auth.id
            },
            headers: {
                authorization: `Basic ${auth.acessToken}`
            }

        })



        if (res.data === 'CREATED') {
            enqueueSnackbar(`❤️`, {
                variant: 'info',
                persist: false
            })

            return
        }
        enqueueSnackbar(`💔`, {
            variant: 'warning',
            persist: false
        })
        return
    })

    console.log(state)

    const liked = () => {
        if (!auth) {
            enqueueSnackbar(`Faça seu cadastro ou login para curtir! :D`, {
                variant: 'warning',
                persist: false
            })
            return
        }

        if (isLiked === true) {
            setState(false)
            setIsLiked(false)
            setLikes(likes - 1)
            return
        }

        setIsLiked(true)
        setLikes(likes + 1)
        setState(true)
        return
    }


    useEffect(() => {
        data.Like.map((userLiked: any) => {
            if (userLiked.userId === auth.id) {
                setIsLiked(true)
                return
            }

            return
        })
    }, [])



    const delet = (parms: any) => {
        setOpen(true)
    }


    const [removed, setRemoved] = useAsyncFn(async (params) => {
        const res = await axios({
            method: 'delete',
            baseURL: `${import.meta.env.VITE_API_HOST}`,
            url: '/hunches/removed',
            data: {
                params
            }
        })


        return
    })


    useEffect(() => {

        if (confirmed === 'DELETED') {
            setRemoved(data.id)

            onChange({
                valid: true,
                id: data.id
            })
        }


        setOpen(false)
        setConfirmed('')

    }, [confirmed])

    return (
        <>
            <ResponsiveDialog

                onOpen={open}
                onClosed={setOpen}
                confirmation={setConfirmed}
            />
            <div className='flex justify-center w-full border-t border-gray-100/[0.5] h-16 items-center bg-gray-200/[0.1]'>

                <div className='w-[85%] flex justify-around'>

                    <span className='flex items-center gap-1 justify-center text-xs'>
                        {isLiked ?
                            <Heart size={20} className='transition-all cursor-pointer text-red-200/[0.5] hover:text-red-200' weight="fill" onClick={liked} />
                            :
                            <Heart size={20} className='transition-all cursor-pointer text-red-200/[0.5] hover:text-red-200' onClick={liked} />
                        }
                        {likes}
                    </span>
                    {
                        location.pathname.split('/')[2] === auth.username &&
                        <Trash size={20} className='transition-all cursor-pointer text-red-200/[0.5] hover:text-red-200' onClick={delet} />

                    }

                </div>
            </div>

        </>

    )
}