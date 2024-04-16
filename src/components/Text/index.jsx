import React from "react";

const sizes = {
  xs: "text-2xl font-medium md:text-[22px]",
  lg: "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  s: "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
  "2xl": "text-5xl font-medium md:text-[44px] sm:text-[38px]",
  "3xl": "text-[80px] font-normal md:text-5xl",
  xl: "text-4xl font-normal md:text-[34px] sm:text-[32px]",
  md: "text-[27px] font-medium md:text-[25px] sm:text-[23px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_01 font-spacegrotesk ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };