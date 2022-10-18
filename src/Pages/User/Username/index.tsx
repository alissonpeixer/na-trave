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


export const Username = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [auth]: any = useLocalStorage('auth', false)
  const params = useParams()


  const [removed, setRemoved] = useState(false)

  const location = useLocation();


  const [hunches, hunchesFetch]: any = useAsyncFn(async () => {
    const res = await axios({
      method: 'get',
      baseURL: `${import.meta.env.VITE_API_HOST}`,
      url: `/users/${params.username}`
    })

    return res.data
  })

  const copyUrl = () => {
    enqueueSnackbar(`Link do perfil copiado! `, {
      variant: 'success',
      persist: false
    })
    copy(window.location.href)
    return
  }

  const isLoading = hunches.loading
  const hasError = hunches.error
  const isDone = !isLoading && !hasError




  useEffect(() => {
    hunchesFetch()
  }, [])


  useEffect(() => {
    if (removed) {
      window.location.reload();
      return
    }
  }, [removed])


  return (

    <>
      {!hunches.error?.message && !hunches.error?.response.data ?

        <main className={isLoading ? 'hidden' : `bg-white min-h-screen flex flex-col items-center`}>

          <div className="bg-red-100  w-full drop-shadow-lg">

            <div className="mx-auto container">


              <Header
                colorLogo="wine"
              />

              <div className="border-t border-red-200/[0.1] p-4 flex items-center gap-4">
                <h1 className="text-xl">

                  {isDone && !auth || location.pathname.split('/')[2] !== auth.username ?
                    <div className="flex gap-2 items-center">
                      <UserCircle size={32} />
                      {hunches.value?.name || 'UM NOME LEGAL :)'}
                    </div>
                    :

                    `Olá, ${hunches.value?.name || 'UM NOME LEGAL :)'}`

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


            {isDone && hunches.value?.hunches.map((game: any) => (
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
          <ErrorPage status={hunches.error?.message} />
        </main>

      }



    </>

  )
}