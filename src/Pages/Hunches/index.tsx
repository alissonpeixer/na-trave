

import { Header } from "../../components/Header"
import { SelectedDay } from "../../components/SelectedDay"
import { CardGame } from "../../components/CardGame" 

export const Hunches = () =>{
  return(
    <main className="bg-white h-screen flex flex-col items-center">

      <div className="bg-red-100  w-full drop-shadow-lg">

        <div className="mx-auto container">

          <Header
            colorLogo="wine"
          />

          <div className="border-t border-red-200/[0.1] p-4">
            <h1 className="text-xl">Olá, <span className="font-bold">Alisson Peixer</span></h1>
          </div>

        </div>

      </div>

      <div className="container mx-auto px-3 flex flex-col items-center">
        <SelectedDay/>
        
        <CardGame />


      </div>
    </main>
  )
}