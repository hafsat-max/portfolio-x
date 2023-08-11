import React from "react";

import LoginBanner from "./login-banner";
import LoginForm from "./login-form";

const Login = () => {
  return (
    <section className=" flex-1 bg-white mt-[100px]">
      <div className=" flex justify-between items-center align ">
        <LoginBanner />
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
