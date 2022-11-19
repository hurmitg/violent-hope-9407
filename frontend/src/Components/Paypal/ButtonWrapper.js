import { useContext, useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useConst, useToast } from "@chakra-ui/react";
import { AppContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

// This values are the props in the UI

const currency = "USD";
const style = {"layout":"vertical","color":"black","width":"100%"};


// Custom component to wrap the PayPalButtons and handle currency changes
export const ButtonWrapper = ({ currency, showSpinner }) => {
    const navigate=useNavigate()
    const toast=useToast()
  
    const {grand} = useContext(AppContext)
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[grand, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: grand,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                           
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                        navigate("/ordersummary");
                        toast({
                            title: 'Payment successfull !',
                        
                            status: 'success',
                            duration: 9000,
                            isClosable: true,
                          })
                    });
                }}
            />
        </>
    );
}