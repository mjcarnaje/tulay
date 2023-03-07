import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <p>Layout</p>
    </div>
  );
};

export default Layout;
