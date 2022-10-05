import { Logo } from '../Logo'

interface Prop {
  color: string,
}

export const Header = ( { color } : Prop) => {



  return(
    <header className={` h-16 ${color} flex items-center justify-center`}>

      <Logo width={100} height={100}/>
      
    </header>
    
  )
}