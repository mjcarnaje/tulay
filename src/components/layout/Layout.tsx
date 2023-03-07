import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC<PropsWithChildren<{ isPage?: boolean }>> = ({
  children,
  isPage = true,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {isPage ? <Outlet /> : children}
    </div>
  );
};

export default Layout;
