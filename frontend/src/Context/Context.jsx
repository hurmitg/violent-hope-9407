import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  let token = localStorage.getItem("token");
  const nav = useNavigate();
  return (
    <AppContext.Provider
      value={{
        token,
        nav,
        loading,
        error,
        success,
        setLoading,
        setError,
        setSuccess,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
