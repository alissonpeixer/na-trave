import axios from 'axios'
import { useAsyncFn, useLocalStorage } from 'react-use'
import { useEffect, useState } from 'react'
import { formatISO } from 'date-fns'

import { Header } from "../../components/Header"
import { SelectedDay } from "../../components/SelectedDay"
import { CardGame } from "../../components/CardGame"
import { useNavigate } from 'react-router-dom'

import { ErrorPage } from '../ErrorPage'
import { Backdrop, CircularProgress } from '@mui/material'

import { getUserSession } from '../../util/session'

type GameType = {
  id: string;
  awayTeam: number;
  homeTeam: number;
  dayGame: Date;
  createAt: Date;
  updatedAt: Date;
}

type parms = {
  gameTime: string
}


type LocalUser = {
  auth: {
    username: string;
    acessToken: string;
    id: string;
    name: string;
  }
}



export const Hunches = () => {



  const navegation = useNavigate()
  const [currentDate, setDate] = useState(formatISO(new Date(2022, 10, 20)))
  const [auth]: any = useLocalStorage('auth')
  const [session, setSession] = useState(false)


  const [hunches, fetchHunches] = useAsyncFn(async (authUser: LocalUser) => {


    const res = await axios({
      method: 'get',
      baseURL: `${import.meta.env.VITE_API_HOST}`,
      url: `users/${authUser}`,
      headers: {
        authorization: `Basic ${auth.acessToken}`
      }

    })


    const hunches = res.data.hunches.reduce((acc: any, hunch: any) => {
      acc[hunch.gameId] = hunch

      return acc
    }, {})


    return hunches
  })

  const [games, gamesFetch] = useAsyncFn(async (params: parms) => {

    const res = await axios({
      method: 'get',
      baseURL: `${import.meta.env.VITE_API_HOST}`,
      url: '/games',
      params,
      headers: {
        authorization: `Basic ${auth.acessToken}`
      }
    })

    return res.data
  })

  const isLoading = games.loading || hunches.loading
  const hasError = games.error || hunches.error
  const isDone = !isLoading && !hasError



  useEffect(() => {
    
    getUserSession(auth)

    gamesFetch({ gameTime: currentDate })
    fetchHunches(auth.username)

  }, [currentDate])

 

  

  return (
    <>
      {!auth || !games.error?.message ?

        <main className="min-h-screen flex flex-col items-center  bg-white">
          <div className="bg-red-100  w-full ">

            <div className="mx-auto container">

              <Header
                colorLogo="wine"
              />

              <div className="border-t border-red-200/[0.1] p-4">
                <h1 className="text-xl">Olá, <span className="font-bold">{auth.name}</span></h1>
              </div>

            </div>

          </div>

          <div className="container mx-auto px-3 flex flex-col items-center min-h-screen">
            <SelectedDay
              currentDate={{ time: currentDate }} onChange={setDate}
            />

            <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={isLoading}

            >
              <CircularProgress color="inherit" />
            </Backdrop>



            {hasError && 'Ops algo deu errado'}
            {isDone &&
              games.value?.map((game: GameType) => (

                <CardGame
                  hunches={hunches}
                  key={game.id}
                  data={game}
                />

              ))
            }


          </div>
        </main>

        :

        <main className="overflow-hidden">
          <Header
            colorLogo="wine"
          />
          <ErrorPage status={games.error.message} />
        </main>
      }
    </>

  )
}