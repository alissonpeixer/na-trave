import { useNavigate } from "react-router-dom";
import { Grow } from "@mui/material";
import { useLocalStorage } from "react-use";

import IMAGE from '/img/img.png'

import { Button } from "../../components/Button";
import { Header } from '../../components/Header';

export const Home = () => {

  const [auth] = useLocalStorage('auth', false)

  const navigate = useNavigate();

  const goToUsers = () => {
    navigate("/user")
  }


  const signIn = () => {
    navigate("/signin")
  }
  const signUp = () => {
    navigate("/signup")
  }

  const hunche = () => {
    navigate("/hunches")
  }


  return (
    <>
      <Header
        colorLogo="wine"
      />
      <main className="transition-all px-6 flex flex-col gap-10 items-center xl:flex-row pt-10 xl:pt-0 h-[90vh] pb-10">
        <div className="transition-all xl:w-5/12 xl:flex xl:justify-center">

          <Grow in={true}>
            <img
              src={IMAGE}
              alt="Peoples"
              className="transition-all w-[380px]   min-w-[100px] max-w-[600px] xl:w-[486] 2xl:w-[600px]"
            />
          </Grow>

        </div>

        <div className="transition-all  space-y-16  flex flex-col  items-center ">

          <h1 className="transition-all  font-bold text-2xl text-center tracking-wide  sm:text-3xl xl:text-5xl">
            Dê o seu palpite na Copa do Mundo do Catar 2022!
          </h1>

          <div className="flex flex-col  justify-around gap-4">
            {auth ?
              <>
                <Button
                  text="Dar meu palpite"
                  colorBg="bg-white"
                  colorText="red-100"
                  onClick={hunche} />

              </>
              :
              <>
                <Button
                  text="Criar minha conta"
                  colorBg="bg-white"
                  colorText="red-100"
                  customClass="hover:text-white hover:bg-red-300"
                  onClick={signUp}
                />
                <Button
                  text="Já tenho conta"
                  colorBg="none"
                  colorText="white"
                  customClass="border border-white hover:border-red-200 hover:border-red-200 hover:bg-red-300"
                  onClick={signIn}
                />
              </>
            }
            <Button
              text="Ver usuários"
              colorBg="none"
              colorText="white"
              customClass="border border-white hover:border-red-200 hover:bg-red-300"
              onClick={goToUsers} />
          </div>
        </div>
      </main>
    </>
  );
};
