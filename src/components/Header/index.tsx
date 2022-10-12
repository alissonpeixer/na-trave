import WHITELOGO  from '/logo/logo-fundo-branco.svg'
import REDLOGO  from '/logo/logo-fundo-vermelho.svg'
import WINELOGO from '/logo/logo-fundo-vinho.svg'

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

interface PropsHearder {
  colorLogo: string;
  colorBg?: string;
}

export const Header = ({colorLogo, colorBg, } : PropsHearder) => {
  const [ loginCurrent, setLogin ] = useState(false)
  const [ logoCurrent, setLogo ] = useState('ESCOLGA UM PADRÂO DE COR')


  const navigator = useNavigate()
  const home = () =>{
    navigator('/')
  }


  useEffect(()=>{
  
    if(colorLogo === 'white'){
      setLogo(WHITELOGO)
      return
    }

    if(colorLogo === 'red'){
      setLogo(REDLOGO)
      return
    }

    if(colorLogo === 'wine'){
      setLogo(WINELOGO)
      return
    }


  }, [])
  return(
    
    <header className={` h-20 w-full`}>

      <div className={loginCurrent ? 'flex items-center  h-full justify-center xl:justify-start' : 'flex items-center justify-center h-full'}>

          <img src={logoCurrent} alt=""  className='w-[140px] md:w-[150px] xl:w-[170px] cursor-pointer' onClick={home}/>

      </div>
    </header>


  )

}