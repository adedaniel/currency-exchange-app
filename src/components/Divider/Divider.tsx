import React from 'react'
import { FC } from 'react'

interface DividerProps {
  className?: string
}

const Divider: FC<DividerProps> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={`w-full h-0.5 bg-gray-100 my-3 ${className}`} {...rest} />
  )
}

export default Divider
