import React from "react";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

const Logo = () => {
  return <Image src={logo} width={200} height={70} alt="Logo" />;
};

export default Logo;
