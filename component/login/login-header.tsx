import React from "react";
import Logo from "../shared/logo";
import { NavList } from "../shared";
import BookTrial from "../shared/book-trial";

const LoginHeader = () => {
  return (
    <section
      className=" bg-whit w-full "
      style={{
        borderBlockEnd: "1px solid rgba(0, 0, 0, 0.16)",
        paddingInline: 0,
      }}
    >
      <nav className="flex justify-between items-center align py-24">
        <Logo />

        <NavList />

        <BookTrial />
      </nav>
    </section>
  );
};

export default LoginHeader;
