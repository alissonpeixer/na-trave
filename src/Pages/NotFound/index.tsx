import { Link } from "react-router-dom"

export const NotFound = () =>{
  return(
    <main className="bg-black1 h-screen text-white1 flex flex-col items-center justify-center ">
      <span className="mb-10 text-6xl">404 :c</span>
      <Link to={"/"}>
        <button className="transition-all font-bold border border-white1 p-4 rounded-xl hover:bg-red1">
          GO TO HOME
        </button>
      </Link>
      
    </main>
  )
}