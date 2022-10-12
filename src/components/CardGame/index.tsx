export const CardGame = () =>{
  return(
    <div className="h-36 w-full xl:w-[600px] border border-gray-100 text-red-100 text-base rounded-xl flex items-center justify-center gap-5">
      
      <div>
        CAT
      </div>
      <img src="/public/flags/cat.png" alt="" className="w-10" />
      
      <input type="number" className="w-10 h-10 bg-red-200/[0.5] rounded-full text-center" />

      <span className="text-bold text-red-200 text-2xl">X</span>
      
      <input type="number" className="w-10 h-10 bg-red-200/[0.5] rounded-full text-center" />

      <img src="/public/flags/equ.png" alt="" className="w-10" />
      <div>EQU</div>
    </div>
  )
}