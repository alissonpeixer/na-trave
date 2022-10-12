import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
}

export const Input = ({name, label, ...props}: InputProps) =>{
  return(
    <div className="flex flex-col space-y-1 ">
      <label htmlFor={name} className={`font-bold text-gray-200`}>{label}</label>
      <input 
        name={name} 
        className={`transition-all flex p-3 rounded-xl border border-gray-300 text-black  focus:border-red-100  xl:w-[600px]  min-w-[320px] max-w-[600px]`} 
        {...props}
      />
    </div>
  )
}
