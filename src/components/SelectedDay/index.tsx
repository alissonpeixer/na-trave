import { CaretLeft, CaretRight } from 'phosphor-react'

export const SelectedDay = () =>{

  return(
    <div className="h-24 flex items-center justify-center text-red-100 gap-4 md:text-xl xl:text-2xl">
      
      <CaretLeft size={25} weight="bold" className='text-red-200/[0.6] cursor-pointer  hover:text-red-200' />

      <span className="font-bold">22 de Outubro</span>

      <CaretRight size={25} weight="bold" className='text-red-200/[0.6] cursor-pointer hover:text-red-200'/>

    </div>
  )
}