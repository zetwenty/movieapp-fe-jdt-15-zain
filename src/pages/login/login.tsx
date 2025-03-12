import React from "react";

const Login: React.FC = () => {
  return (
    <form className="flex flex-col justify-center items-center w-full h-screen">
      <h1>Username</h1>
      <input type="text" className="border p-3 rounded-sm" />

      <input type="password" className="border p-3 rounded-sm" />
    </form>
  );
};

export default Login;
