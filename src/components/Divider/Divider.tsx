import React, { FC } from "react";

interface IDividerProps {
  className?: string; // to allow addition of other style classes
}

const Divider: FC<IDividerProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={`w-full h-0.5 bg-gray-100 my-3 ${className}`} {...rest} />
  );
};

export default Divider;
