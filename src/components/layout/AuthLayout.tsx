import React, { PropsWithChildren } from "react";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="bg-red-500">{children}</div>;
};

export default AuthLayout;
