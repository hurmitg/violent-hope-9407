import { useToast } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "./readingCookie";
export default function PrivateRoute({ children }) {
  let localToken = window.localStorage.getItem("token");
    const toast = useToast()
    
  let cookieToken = getCookie("MyMetheresaToken");
  function notLogin(){
    toast({
        title: 'You are not login',
       
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
  }
 
 
  if (!localToken) {
    notLogin()
    return <Navigate to="/login" />;
  }

  return children;
}
