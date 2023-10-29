import React from "react";
import Landing from "../components/Payement/Landing";
import Card from "../components/Payement/Card";

const Payment = () => {
    const initiatePayment = () => {
        fetch('http://localhost:3000/startTransaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: 200000,
                email: 'user@email.com',
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.authorizationUrl) {
                window.location.href = data.authorizationUrl;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <Landing />
            <Card />
            <button onClick={initiatePayment}>Subscribe</button>
        </div>
    );
};

export default Payment;
