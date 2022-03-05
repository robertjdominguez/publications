import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const adminList = ["Rob Dominguez"];

  let state = {
    isNavVisible,
    setIsNavVisible,
    adminList,
  };

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
