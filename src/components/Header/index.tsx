import { Grow } from '@mui/material';
import { UserCircle, SignOut, SignIn, House } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useLocalStorage } from 'react-use';
import { getUserSession } from '../../util/session'

import WHITELOGO from '/logo/logo-fundo-branco.svg'
import REDLOGO from '/logo/logo-fundo-vermelho.svg'
import WINELOGO from '/logo/logo-fundo-vinho.svg'

interface PropsHearder {
  colorLogo: string;
  colorBg?: string;
}

export const Header = ({ colorLogo, colorBg, }: PropsHearder) => {
  const navegation = useNavigate()
  const [logoCurrent, setLogo] = useState('ESCOLGA UM PADRÂO DE COR')
  const [auth, removeAuth]: any = useLocalStorage('auth', false)

  const navigator = useNavigate()
  const params = useParams()
  const location = useLocation();

  const goToHunches = () => {
    navegation('/hunches')
  }

  const home = () => {
    navigator('/')
  }

  const logout = () => {
    removeAuth(false)
    navigator('/')
  }

  const goToProfile = () => {
    navegation(`/user/${auth.username}`)
  }

  useEffect(() => {

    getUserSession(auth)

    if (colorLogo === 'white') {
      setLogo(WHITELOGO)
      return
    }

    if (colorLogo === 'red') {
      setLogo(REDLOGO)
      return
    }

    if (colorLogo === 'wine') {
      setLogo(WINELOGO)
      return
    }


  }, [])



  return (

    <header className={` h-20 w-full`}>

      <div className={auth ? 'transition-all flex items-center  h-full justify-between px-5' : 'flex  justify-center w-full h-full'}>

        <div className={auth ? 'flex-1 flex  xl:justify-center px-5' : 'flex  xl:justify-center px-5 xl:w-full'}>
          <img src={logoCurrent} alt="" className='w-[140px] md:w-[150px] xl:w-[170px] cursor-pointer ' onClick={home} />
        </div>


        {auth &&

          <Grow in={true}>
            <div className='flex gap-3 '>

              {location.pathname !== '/hunches' &&
                <House size={32} weight="fill" className={auth ? 'transition-all cursor-pointer hover:fill-red-200' : 'hidden'} onClick={goToHunches} />
              }
              {!params.username &&
                <UserCircle size={32} weight="fill" className={auth ? 'transition-all cursor-pointer hover:fill-red-200' : 'hidden'} onClick={goToProfile} />
              }
              <SignOut size={32} weight="fill" className={auth ? 'transition-all cursor-pointer hover:fill-red-200' : 'hidden'} onClick={logout} />
            </div>
          </Grow>

          //   :

          // location.pathname !== '/signup' && location.pathname !== '/signin' && location.pathname !== '/' &&
          // <div className='flex px-5 xl:px-0 items-center'>
          //   <SignIn size={32} weight="fill" className='transition-all cursor-pointer hover:fill-red-200' />
          // </div>
        }


      </div>
    </header>


  )

}