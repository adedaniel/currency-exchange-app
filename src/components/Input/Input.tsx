import React from "react";
import { FC } from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

const Input: FC<IInputProps> = (props) => {
  const { className, label, ...rest } = props;
  return (
    <div>
      <p className="text-gray-400 mb-1 text-sm">{label}</p>
      <input
        className={`border-[1px] border-gray-200 rounded-[0.25rem] px-4  w-full text-sm h-12 ${className}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
