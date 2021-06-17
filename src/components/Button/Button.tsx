import React from 'react'
import { FC } from 'react'

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: FC<ButtonProps> = (props) => {
  const { className, ...rest } = props
  return (
    <button
      className={`w-full h-12 border-[1px] rounded-md ${className}`}
      {...rest}
    />
  )
}

export default Button
