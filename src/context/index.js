import React from "react";

import { UserContextProvider } from "./user";

const GlobalContext = ({ children }) => {
  return (
    <>
      <UserContextProvider>{children}</UserContextProvider>;
    </>
  );
};

export default GlobalContext;