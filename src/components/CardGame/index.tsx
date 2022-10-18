import { Grow } from '@mui/material';
import axios from 'axios';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useLocalStorage } from 'react-use';
import * as yup from 'yup';
interface CardProps {
  data: {
    id: string;
    awayTeam: number;
    homeTeam: number;
    dayGame: Date;
    createAt: Date;
    updatedAt: Date;
  }

  hunches: any
}

const validationSchema = yup.object().shape({
  homeScore: yup.number().required().positive().integer(),
  awayScore: yup.number().required('required').positive().integer()
})

export const CardGame = ({ data, hunches }: CardProps) => {
  const { enqueueSnackbar } = useSnackbar();

  const [auth]: any = useLocalStorage('auth')


  const homeScore = hunches?.value?.[data.id]?.homeTeamScore === 0 ? 0 : hunches?.value?.[data.id]?.homeTeamScore || ''
  const awayScore = hunches?.value?.[data.id]?.awayTeamScore === 0 ? 0 : hunches?.value?.[data.id]?.awayTeamScore || ''

  const formik = useFormik({
    onSubmit: async (value) => {
      await axios({
        method: 'post',
        baseURL: `${import.meta.env.VITE_API_HOST}`,
        headers: {
          authorization: `Berer ${auth.acessToken}`
        },
        url: '/hunches',
        data: {
          ...value,
          gameId: data.id
        }
      })
        .then(res => {
          console.log(res)
          enqueueSnackbar(`Palpite computado! `,
            {
              variant: 'success',
              persist: false
            })
        }).catch(error => {
          console.log(error)
        })
    },
    initialValues: {
      homeScore,
      awayScore
    },
    validationSchema
  })



  return (
    <Grow in={true}>
      <div className="transition-all h-36 w-full xl:w-[600px] border my-2 border-gray-100 text-red-100 text-base rounded-xl flex flex-col items-center justify-center gap-5">

        <span>{format(new Date(data.dayGame), 'HH:mm')}</span>

        <div className="flex gap-5 items-center justify-center">

          <div className='transition-all uppercase md:text-xl'>{data.homeTeam}</div>

          <img src={`/flags/${data.homeTeam}.png`} alt="" className="w-10 md:w-14" />

          <input
            name='homeScore'
            type="number"
            className={
              formik.errors.homeScore ?
                'transition-all  w-10 h-10 bg-red-200/[0.5] rounded-full text-center text-xl md:w-14 md:h-14 border-red-200 border-4  placeholder:italic placeholder:text-red-300' :
                'transition-all w-10 h-10 bg-red-200/[0.5] rounded-full text-center text-xl md:w-14 md:h-14  placeholder:text-red-100 placeholder:font-bold'
            }
            onChange={formik.handleChange}
            value={formik.values.homeScore}
            onBlur={() => formik.handleSubmit()}
            placeholder={formik.errors.homeScore ? '??' : '?'}

            required
          />

          <span className="transition-all text-bold text-red-200 text-2xl md:text-4xl">X</span>

          <input
            name='awayScore'
            type="number"
            className={
              formik.errors.awayScore ?
                'transition-all  w-10 h-10 bg-red-200/[0.5] rounded-full text-center text-xl md:w-14 md:h-14 border-red-200 border-4  placeholder:italic placeholder:text-red-300' :
                'transition-all w-10 h-10 bg-red-200/[0.5] rounded-full text-center text-xl md:w-14 md:h-14  placeholder:text-red-100 placeholder:font-bold'
            }

            onChange={formik.handleChange}
            value={formik.values.awayScore}
            onBlur={() => formik.handleSubmit()}
            placeholder={formik.errors.awayScore ? '??' : '?'}

            required
          />

          <img src={`/flags/${data.awayTeam}.png`} alt="" className="transition-all w-10 md:w-14" />

          <div className='transition-all uppercase md:text-xl'>{data.awayTeam}</div>

        </div>
      </div>
    </Grow>
  )
}