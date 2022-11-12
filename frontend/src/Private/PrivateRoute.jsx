import { useToast } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "./readingCookie";
let localToken = localStorage.getItem("token");
export default function PrivateRoute({ children }) {
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
 
 
  if (localToken != cookieToken || localToken == null || cookieToken == null) {
    notLogin()
    return <Navigate to="/login" />;
  }

  return children;
}
