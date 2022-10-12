import { useNavigate } from "react-router-dom";

import IMAGE from '/img/img.png'

import { Button } from "../../components/Button";
import { Header } from '../../components/Header';



export const Home = () => {

  const navigate = useNavigate();

  const signIn = () => {
    navigate("/signin")
  }
  const signUp = () => {
    navigate("/signup")
  }

  return (
   <>
      <Header 
        colorLogo="wine"
      />
      <main className="transition-all px-6 flex flex-col gap-10 items-center xl:flex-row pt-10 xl:pt-0 h-[90vh] pb-10">
        <div className="transition-all xl:w-5/12 xl:flex xl:justify-center"> 
          <img 
          src={IMAGE} 
          alt="Peoples" 
          className="transition-all w-[380px]   min-w-[100px] max-w-[600px] xl:w-[486] 2xl:w-[600px]"
          />
        </div>

        <div className="transition-all  space-y-16  flex flex-col  items-center ">

          <h1 className="transition-all  font-bold text-2xl text-center tracking-wide  sm:text-3xl xl:text-5xl">
            Dê o seu palpite na Copa do Mundo do Catar 2022!
          </h1>

          <div className="flex flex-col h-36 justify-around ">

            <Button
                text="Criar minha conta"
                colorBg="white"
                colorText="red-100"
                onClick={signUp}
              />

              <Button
                text="Já tenho conta"
                colorBg="none"
                colorText="white"
                customClass="border border-white"
                onClick={signIn}
              />

          </div>
        </div>
      </main>
   </>
  );
};
