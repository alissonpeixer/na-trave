import { Grow } from '@mui/material';
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale';


import { ExtionCardGame } from '../ExtionCardGame';

interface CardProps {
  data: {
    id: string;
    awayTeam: number;
    homeTeam: number;
    dayGame: Date;
    createAt: Date;
    updatedAt: Date;
  }
}



export const CardGameUser = ({ data, onChange }: any) => {


  return (
    <Grow in={true}>
      <div className="w-full xl:w-[600px] border my-2 border-gray-100 text-red-100 text-base rounded-xl flex flex-col items-center justify-around h-52 gap-2">

        <div className="flex gap-5 items-center justify-center flex-1">

          <div className='uppercase'>{data.game.homeTeam}</div>

          <img src={`/flags/${data.game.homeTeam}.png`} alt="" className="w-10" />



          <div className="w-10 h-10 bg-red-200/[0.5] rounded-full  flex items-center justify-center">
            {data.homeTeamScore}
          </div>

          <span className="text-bold text-red-200 text-2xl">X</span>

          <div className="w-10 h-10 bg-red-200/[0.5] rounded-full  flex items-center justify-center">
            {data.awayTeamScore}
          </div>

          <img src={`/flags/${data.game.awayTeam}.png`} alt="" className="w-10" />

          <div className='uppercase'>{data.game.awayTeam}</div>

        </div>
        <div className="text-center">
          <span>Palpite do dia <strong>{format(new Date(data.game.dayGame), "d 'de' MMMM", { locale: ptBR })}</strong></span>
          {' / '}
          <span>Horário do jogo <strong>{format(new Date(data.game.dayGame), "HH:mm 'H'")}</strong></span>
        </div>

        <ExtionCardGame
          data={data}
          onChange={onChange}
        />


      </div>
    </Grow>
  )
}
