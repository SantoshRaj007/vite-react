import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

const PayPalButton = ({ amount, onSuccess, onError}) => {
    return (
        <PayPalScriptProvider options={{"clientId" : "AfCoGWmzuyxZCBWCwG3pi4W_YOU8eTEeTxxScvr1qjGwT7rU2vpILaBP7IK6rTW0FueScNob9RXSmZVN"}}>
            <PayPalButtons style={{layout: "vertical"}}
                createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{ amount: {value: amount}}],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then(onSuccess);
            }}
            onError={onError}
            />
        </PayPalScriptProvider>
    )
}

export default PayPalButton
