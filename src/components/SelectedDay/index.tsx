import { addDays, format, formatISO, subDays } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CaretLeft, CaretRight } from 'phosphor-react'

interface Props {
  currentDate: {
    time: string
  };

  onChange: any;
}

export const SelectedDay = ({currentDate , onChange} : Props) =>{
  const date = new Date(currentDate.time)

  const prevDay = () =>{
    const nextDate = subDays(date, 1)
    onChange(formatISO(nextDate))
  }
  const nextDay = () => {
    const nextDate = addDays(date, 1)
    onChange(formatISO(nextDate))
  }

  return(
    <div className="h-24 flex items-center justify-center text-red-100 gap-4 md:text-xl xl:text-2xl">

      <CaretLeft size={25} weight="bold" className='text-red-200/[0.6] cursor-pointer  hover:text-red-200' onClick={prevDay} />

      <span className="font-bold">

      {format(date, "d 'de' MMMM", {locale: ptBR} )}

      </span>

      <CaretRight size={25} weight="bold" className='text-red-200/[0.6] cursor-pointer hover:text-red-200' onClick={nextDay}/>

    </div>
  )
}