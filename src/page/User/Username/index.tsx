import { useLocation, useParams } from "react-router-dom"
import { useAsyncFn, useLocalStorage } from "react-use"
import axios from "axios"
import { useEffect, useState } from "react"
import * as copy from 'copy-to-clipboard';

import { Header } from "../../../components/Header"
import { CardGameUser } from "../../../components/CardGameUser"
import { ShareNetwork, UserCircle } from "phosphor-react"

import { ErrorPage } from "../../ErrorPage";
import { useSnackbar } from "notistack";
import { Backdrop, CircularProgress } from "@mui/material";

import { AuthType } from '../../../../Types/types'


type Props = {
  loading: boolean;
  data: {
    name?: string,
    username?: string,
    hunches?: []
  },
  error: {
    message?: string,
    code?: string,
    isError: boolean
  }
}
export const Username = () => {

  const { enqueueSnackbar } = useSnackbar();
  const [auth] = useLocalStorage<AuthType>('auth')
  const params = useParams()


  const [removed, setRemoved] = useState(false)

  const location = useLocation();

  const [state, setState] = useState<Props>(
    {
      loading: true,
      data: {},
      error: {
        isError: false
      }
    }
  )


  const fetch = async () => {

    setState((prevState) => ({ ...prevState, loading: true }))


    await axios({
      method: 'get',
      baseURL: `${import.meta.env.VITE_API_HOST}`,
      url: `/users/${params.username}`
    })
      .then((res) => {
        setState((preState) => ({ ...preState, loading: false, data: res.data }))
      })
      .catch((error) => {
        setState((preState) => ({ ...preState, error: { message: error.message, code: error.code, isError: true } }))
      })

  }


  useEffect(() => {
    fetch()
  }, [])


  const copyUrl = () => {
    enqueueSnackbar(`Link do perfil copiado! `, {
      variant: 'success',
      persist: false
    })
    copy(window.location.href)
    return
  }

  const isLoading = state.loading
  const hasError = state.error.isError
  const isDone = !isLoading && !hasError


  useEffect(() => {
    if (removed) {
      window.location.reload();
      return
    }
  }, [removed])


  return (

    <>
      {!state.error?.message ?

        <main className={isLoading ? 'hidden' : `bg-white min-h-screen flex flex-col items-center`}>

          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

          <div className="bg-red-100  w-full drop-shadow-lg">

            <div className="mx-auto container">


              <Header
                colorLogo="wine"
              />

              <div className="border-t border-red-200/[0.1] p-4 flex items-center gap-4">
                <h1 className="text-xl">

                  {isDone && !auth || location.pathname.split('/')[2] !== auth?.username ?

                    <div className="flex gap-2 items-center">
                      <UserCircle size={32} />
                      {state.data?.name || 'UM NOME LEGAL :)'}
                    </div>

                    :

                    `Olá, ${state.data?.name || 'UM NOME LEGAL :)'}`

                  }
                </h1>

                <ShareNetwork size={20} weight="fill" className="transition-all fill-gray-300 hover:fill-white cursor-pointer" onClick={copyUrl} />

              </div>

            </div>

          </div>

          <div className="container mx-auto px-3 flex flex-col items-center">

            <div className="text-black">
              {isLoading && 'Carregando jogos'}

              {hasError && 'Ops algo deu errado'}

            </div>


            {isDone && state.data.hunches?.map((game: any) => (
              <CardGameUser
                key={game.id}
                data={game}
                onChange={setRemoved}
              />
            ))}
          </div>

        </main>

        :
        <main className="overflow-hidden">
          <Header
            colorLogo="wine"
          />
          <ErrorPage status={state.error?.message} />
        </main>

      }



    </>

  )
}