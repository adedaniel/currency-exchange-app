import React, { FC } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string; // to allow addition of other style classes
}

const Button: FC<IButtonProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <button
      className={`w-full h-12 border-[1px] rounded-md ${className}`}
      data-testid="button"
      {...rest}
    />
  );
};

export default Button;
