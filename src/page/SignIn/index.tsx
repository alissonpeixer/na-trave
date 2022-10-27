import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

import { ArrowLeft } from 'phosphor-react'

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'
import { Header } from '../../components/Header';
import axios from 'axios';
import { Alert, AlertTitle, Backdrop, CircularProgress, Grow, Snackbar } from '@mui/material';
import { useState } from 'react';
import { useLocalStorage } from 'react-use';

import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

type FormTypes = {
  login: string;
  password: string
}


let validationSchema = yup.object().shape({
  login: yup.string().email('Formato de e-mail invalido !').required('* Digite seu e-mail'),
  password: yup.string().required('* Digite sua senha')
});

export const SignIn = () => {
  const [alertLogin, setAlertLogin] = useState(false)
  const [auth, setAuth] = useLocalStorage('auth')
  const navigate = useNavigate()



  const back = () => {
    navigate("/")
  }

  const signup = () => {
    navigate("/signup")
  }
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({

    onSubmit: async (values: FormTypes) => {

      await axios({
        method: 'get',
        baseURL: `${import.meta.env.VITE_API_HOST}`,
        url: '/signin',
        auth: {
          username: values.login,
          password: values.password
        }
      })
        .then(res => {

          setAuth(res.data)
          setAlertLogin(true)
          localStorage.setItem('session', JSON.stringify(true))
          setInterval(() => {
            window.location.href = '/hunches'
            setAlertLogin(false)
          }, 2000)

        })
        .catch(error => {
          console.log(error)
          enqueueSnackbar(`${error.message} `, {
            variant: 'error',
            persist: false
          })


          if (error.request.status === 403) {
            console.log(error)
            enqueueSnackbar(`${error.request.response} `, {
              variant: 'error',
              persist: false
            })

            return
          }
        })

    },
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema
  });





  return (

    <main className="bg-white min-h-screen flex">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={formik.isSubmitting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {alertLogin && (
        <div className="flex fixed justify-center  w-screen  p-4">
          <Grow
            in={alertLogin}
            style={{ transformOrigin: "0 3 0" }}
            {...(alertLogin && { timeout: 1000 })}
            className='border border-gray-100/[0.4] drop-shadow-2xl'
          >
            <Alert severity="success" className="w-[400px]">
              <AlertTitle>Sucesso</AlertTitle>
              Logado com sucesso boa sorte!<br></br>
              <strong>Aguarde rediricionando para os palpites...</strong>
            </Alert>
          </Grow>
        </div>
      )}


      <div className="transition-all w-3/6 bg-csBlur bg-cover bg-right-bottom hidden md:block"></div>

      <div className="flex-1 px-6 xl:px-12 pt-8">
        <Header colorLogo="white" />
        <div className="flex items-center space-x-4 h-28 2xl:ml-32">
          <ArrowLeft
            size={40}
            weight="bold"
            className="transition-all text-red-100/[1] hover:text-red-200 active:text-red-200 cursor-pointer"
            onClick={back}
          />
          <h1 className="text-red-100 text-2xl font-bold">
            Entre na sua conta
          </h1>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center space-y-5 xl:items-center"
        >
          <Input
            type="email"
            label="Login"
            name="login"
            error={formik.errors.login || ""}
            onChange={formik.handleChange}
            value={formik.values.login}
            onBlur={formik.handleBlur}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            error={formik.errors.password || ""}
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />

          <Button
            type="submit"
            colorText="white"
            colorBg="bg-red-200"
            text={formik.isSubmitting ? 'Enviando...' : "Entrar"}
            disabled={formik.isSubmitting || !formik.isValid}
          />
        </form>

        <div className="flex items-center justify-center h-16">
          <span className="text-black">
            Não tem conta então{"   "}
            <a
              onClick={signup}
              className="transition-all text-red-200/[0.5] font-bold hover:text-red-300 cursor-pointer"
            >
              Inscrever-se
            </a>
          </span>
        </div>
      </div>
    </main>

  );
}