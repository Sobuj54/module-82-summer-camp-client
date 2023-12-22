import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useContextApi from "../../../Hooks/useContextApi";

const CheckoutForm = ({ totalPrice }) => {
  const { user } = useContextApi();
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  console.log(totalPrice);

  // creating payment intent
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post("/create-payment-intent", { totalPrice }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      console.log("no card found");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmationError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmationError) {
      console.log(confirmationError);
    }
    console.log("paymentIntent :", paymentIntent);
    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/4 mx-auto mt-20">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="bg-emerald-500 px-3 py-2 rounded text-white mt-4"
        type="submit"
        disabled={!stripe || processing}
        style={{ cursor: "pointer" }}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
