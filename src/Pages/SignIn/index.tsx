import { ArrowLeft } from 'phosphor-react'
import { useNavigate } from "react-router-dom";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'
import { Header } from '../../components/Header';

export const SignIn = () =>{

  const navigate = useNavigate()

  const back = () =>{
    navigate("/")
  }

  const signup = () =>{
    navigate("/signup")
  }
  return (
    <main className="bg-white h-screen flex">
      <div className="transition-all w-3/6 bg-csBlur bg-cover bg-right-bottom hidden md:block"></div>

      <div className="flex-1 px-6 xl:px-12 pt-8">
        
        <Header 
          colorLogo='white'
        />

        <div className="flex items-center space-x-4 h-28 xl:ml-32">
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
        <form action="" className="flex flex-col justify-center space-y-5 xl:items-center">
          <Input type="email" label="Login" name="login" />
          <Input type="password" label="Password" name="password" />

   
          <Button colorText="white" colorBg="red-200" text="Entrar" />
       
        </form>

        <div className="flex items-center justify-center h-16">
          <span className="text-black">
            Não tem conta então{'   '}
            <a onClick={signup} className="transition-all text-red-200/[0.5] font-bold hover:text-red-300 cursor-pointer">
              Inscrever-se
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}