import React from "react";

const sizes = {
  s: "text-[29px] font-bold md:text-[27px] sm:text-[25px]",
  md: "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  xs: "text-[27px] font-semibold md:text-[25px] sm:text-[23px]",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_01 font-spacegrotesk ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
