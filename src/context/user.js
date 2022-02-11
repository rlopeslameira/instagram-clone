import React, { createContext, useState } from "react";

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    name: "",
    avatar: "",
    username: "",
    email: "",
  },
  setState: () => {}, //função de inicialização
};

//criando nosso contexto UserContext
const UserContext = createContext(DEFAULT_VALUE);

const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContextProvider };
export default UserContext;