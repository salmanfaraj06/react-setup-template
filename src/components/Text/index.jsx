import React from "react";

const sizes = {
  xs: "text-[20px] ",
  lg: "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  s: "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
  "2xl": "text-5xl font-medium md:text-[44px] sm:text-[38px]",
  "3xl": "text-[72px] font-medium  md:text-[46px]",
  xl: "text-4xl font-normal md:text-[30px] sm:text-[18px]",
  md: "text-[27px] font-medium md:text-[25px] sm:text-[23px]",
  mypro :" text-center text-[72px] font-medium  md:text-[46px]"
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`font-spacegrotesk ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
