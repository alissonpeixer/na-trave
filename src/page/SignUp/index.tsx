import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle, Backdrop, CircularProgress, Grow } from '@mui/material';
import { useState } from 'react';
import { useLocalStorage } from 'react-use';
import { ArrowLeft } from 'phosphor-react'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'
import { Header } from '../../components/Header';

import { FormTypes } from '../../../Types/types'
import { useSnackbar } from 'notistack';


let validationSchema = yup.object().shape({
  name: yup.string().required('* Digite seu nome').min(4, 'Minimo de Caracteres 4 characters').max(20, 'Máximo de Caracteres 20'),

  username: yup.string().required('* Digite seu username').lowercase('a').min(4, 'Minimo de Caracteres 4 characters').max(10, 'Máximo de Caracteres 10'),

  email: yup.string().email('Formato de e-mail invalido !').min(4, 'Minimo de Caracteres 4 characters').max(25, 'Máximo de Caracteres 25').required('* Digite seu e-mail'),

  password: yup.string().required('* Digite sua senha').min(4, 'Minimo de Caracteres 4 characters').max(18, 'Máximo de Caracteres 18')
});

export const SignUp = () => {
  const [alertLogin, setAlertLogin] = useState(false)
  const [auth, setAuth] = useLocalStorage('auth')
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();


  const back = () => {
    navigate("/")
  }

  const signin = () => {
    navigate("/signin")
  }



  const formik = useFormik({
    onSubmit: async (values: FormTypes) => {

      const res = await axios({
        method: 'post',
        baseURL: `${import.meta.env.VITE_API_HOST}`,
        url: '/signup',
        data: values
      })
        .then(res => {
          setAlertLogin(true)
          setAuth(res.data)
          localStorage.setItem('session', JSON.stringify(true))
          setInterval(() => {
            window.location.href = '/hunches'
          }, 2000)
        }

        )
        .catch(error => {

          console.log(error)
          enqueueSnackbar(`${error.message} `, {
            variant: 'error',
            persist: false
          })

          if (error.request.status === 402) {

            enqueueSnackbar(`${error.request.response} `, {
              variant: 'error',
              persist: false
            })

            return
          }
        })

    },
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: ''
    },
    validationSchema
  });


  return (
    <>

      <main className="bg-white min-h-screen flex ">
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={formik.isSubmitting}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {alertLogin && (
          <div className="flex fixed justify-end w-screen drop-shadow-2xl p-4">
            <Grow
              in={alertLogin}
              style={{ transformOrigin: "0 3 0" }}
              {...(alertLogin && { timeout: 1000 })}
            >
              <Alert severity="success" className="w-[400px]">
                <AlertTitle>Sucesso</AlertTitle>
                Registrado com sucesso!<br></br>
                <strong>Aguarde rediricionando...</strong>
              </Alert>
            </Grow>
          </div>
        )}

        <div className="transition-all w-3/6 bg-csBlur bg-cover bg-right-bottom hidden md:block"></div>

        <div className="flex-1 px-6 xl:px-12 pt-8">
          <Header
            colorLogo='white'
          />
          <div className="flex items-center space-x-4 h-28 2xl:ml-32">

            <ArrowLeft
              size={40}
              weight="bold"
              className="transition-all text-red-100/[1] hover:text-red-200 active:text-red-200 cursor-pointer"
              onClick={back}
            />

            <h1 className="text-red-100 text-2xl font-bold">
              Crie sua conta
            </h1>

          </div>

          <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center space-y-5 xl:items-center">

            <Input
              type="text"
              label="Nome e Sobrenome"
              name="name"
              placeholder='Digite seu nome e sobrenome'

              error={formik.errors.name || ''}

              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />

            <Input
              type="text"
              label="Username"
              name="username"
              placeholder='Digite um nome de usuário'

              error={formik.errors.username || ''}

              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
            />

            <Input
              type="email"
              label="E-mail"
              name="email"
              placeholder='Digite seu e-mail'

              error={formik.errors.email || ''}

              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />

            <Input
              type="password"
              label="Password"
              name="password"
              placeholder='Digite uma senha'

              error={formik.errors.password || ''}

              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />



            <Button
              type='submit'
              colorText="white"
              colorBg={'bg-red-200'}
              text={formik.isSubmitting ? 'Enviando...' : "Cadastrar-se"}
              disabled={formik.isSubmitting || !formik.isValid}
            />

          </form>



          <div className="flex items-center justify-center h-16">

            <span className="text-black">
              Já tem conta então{'   '}

              <a onClick={signin} className="transition-all text-red-200/[0.5] font-bold hover:text-red-300 cursor-pointer">
                Entrar
              </a>

            </span>

          </div>
        </div>
      </main>


    </>
  )

}