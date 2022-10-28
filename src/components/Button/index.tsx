import { ButtonHTMLAttributes } from "react";

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  colorText: string;
  colorBg: string;
  customClass?: string;
}

export const Button = ({
  text,
  colorText,
  colorBg,
  customClass,
  ...props
}: PropsButton) => {

  return (

    <button
      className={`transition-all font-bold ${colorBg} h-14 min-h-12 rounded-xl  text-${colorText}  ${customClass} w-full  xl:w-[600px]  min-w-[320px] max-w-[600px] `}
      {...props}
    >
      {text}
    </button>
  );
};
