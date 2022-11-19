import React from 'react'
import {
    PayPalScriptProvider,
    
  } from "@paypal/react-paypal-js";
import { ButtonWrapper } from './ButtonWrapper';
import { Box } from '@chakra-ui/react';
export default function PayButton() {
  return (
    <Box ml="2%">
          <PayPalScriptProvider
                 
                options={{
                    "client-id": "AfCN7rN4oBVyIZJXGHTb1giA9VIwAZ8sPU4tDc2uQfDmheUwj4TD69raAB7F7e_thtPQ4YKT9nuf0UQR",
                    components: "buttons",
                    currency: "USD",
                    "disable-funding": "credit,card,p24",
                }}
                
            >
				<ButtonWrapper
                   
                    currency={"USD"}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
    </Box>
  )
}
