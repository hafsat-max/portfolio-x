import React from "react";

import LoginBanner from "./login-banner";
import LoginForm from "./login-form";

const Login = () => {
  return (
    <section className=" flex-1 bg-white dark:bg-[#0b1437]  ">
      <div className=" flex justify-between items-center gap-4 align  max-[975px]:justify-center">
        <LoginBanner />
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
