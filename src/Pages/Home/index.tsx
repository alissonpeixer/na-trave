import { Header } from "../../components/Header";

import { Link } from "react-router-dom";
import ScrollReveal from 'scrollreveal'
import React, { useState, useEffect } from "react";

import { CircleNotch } from "phosphor-react";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() =>{

    setInterval(()=>{
      setLoading(false)

    },1000)


    ScrollReveal().reveal('.headline', { delay: 1000 })

  }, [loading])


  const load = () => {
    if(loading) {
      return 'loader-container'
    }
    return 'hidden'
  }


  return (
    <>
      {
        loading ? 
 

      <div className={`${load} loader-container`}>

        <span className="animate-spin">
          <CircleNotch size={60} className='text-white1' />
        </span>

      </div>
      :
      <main className={`h-screen bg-red1 overflow-y-scroll xl:overflow-y-hidden headline ${load}`}>
        
        <Header color={"bg-red1"} />

        <div className="container  mx-auto ">
          <section className="transition-all  flex h-screen items-center   flex-col pt-10  xl:flex-row xl:pt-0 xl:space-x-6">
            <div className="px-6">
              <img
                src="/img.png"
                alt="peoples"
                className="transition-all min-w-[100px] w-[430px] max-w-[600px] xl:w-[486] 2xl:w-[600px]"
              />
            </div>

            <div className="transition-all bg-red justify-around flex flex-col pt-6  xl:flex-1 xl:pt-0">
              <div className="max-w-2xl">
                <h1 className="transition-all  text-white1  font-bold text-4xl text-center xl:text-5xl xl:text-start">
                  Dê o seu palpite na Copa do Mundo do Catar 2022!{" "}
                </h1>
              </div>

              <div className="transition-all  max-w-4xl h-52 flex flex-col justify-around px-6 xl:px-0">
                <Link to={"/signup"}>
                  <button className=" transition-all w-full text-red1 rounded-xl bg-white1 font-bold p-4">
                    Criar minha conta
                  </button>
                </Link>

                <Link to={"/signin"}>
                  <button className="transition-all  w-full border border-white1 text-white1 font-bold rounded-xl p-4">
                    Fazer login
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

}
    </>
  );
};
