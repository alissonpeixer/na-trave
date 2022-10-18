import { Grow } from "@mui/material";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
  label: string;
  error: string;
}

export const Input = ({name, label, error, ...props}: InputProps) =>{
  return(
    <Grow in={true}>
    <div className="flex flex-col space-y-1 ">
      <label htmlFor={name} className={`font-bold text-gray-200`}>{label}</label>
      <input
        name={name}
        className={`transition-all flex p-3 rounded-xl border border-gray-300 text-black  focus:border-red-100  xl:w-[600px]  min-w-[320px] max-w-[600px]`}
        {...props}
      />

      <div className="h-3">
        <span className="text-red-200 ">{error}</span>
      </div>
    </div>
    </Grow >
  )
}
