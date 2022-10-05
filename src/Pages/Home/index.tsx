

import { Header } from "../../components/Header";

import { Link } from "react-router-dom";

import { useState } from "react";


export  const Home = () => {
  const [loading, setLoading] = useState(false);

  useState(

    setInterval(() => {
      setLoading(true)
    },1000)
  )


  return (
    <>
      {
        loading ? (

          
        <main className="h-screen bg-red1 overflow-y-scroll xl:overflow-y-hidden">
        <Header color={"bg-red1"} />
  
        <div className="container  mx-auto ">
          
          <section className="transition-all  flex h-screen items-center   flex-col pt-10  xl:flex-row xl:pt-0 xl:space-x-6">
  
            <div className="px-6">
              <img
                src="/img.png"
                alt="peoples"
                className="transition-all min-w-[100px] w-[430px] max-w-[486px] xl:w-[486]"
              />
            </div>
  
            <div className="transition-all bg-red justify-around flex flex-col pt-6  xl:flex-1 xl:pt-0">
              <div className="max-w-2xl">
                <h1 className="transition-all  text-white1  font-bold text-4xl text-center xl:text-5xl xl:text-start">
                 
                 
                  Dê o seu palpite na Copa do Mundo do Catar 2022!{" "}
  
                </h1>
              </div>
  
              <div className="transition-all  max-w-4xl h-52 flex flex-col justify-around px-6 xl:px-0">
                <Link to={'/signup'}>
                  <button className="transition-all w-full text-red1 rounded-xl bg-white1 font-bold p-4">
                    
                    Criar minha conta
                  </button>
                </Link>
  
                <Link to={'/signin'}>
                  <button className="transition-all  w-full border border-white1 text-white1 font-bold rounded-xl p-4">
                    Fazer login
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>


        ): "CARREGANDO"
      }
    
    
    </>
  );
}


