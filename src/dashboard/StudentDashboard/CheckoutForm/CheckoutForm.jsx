import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useContextApi from "../../../Hooks/useContextApi";

const CheckoutForm = ({ selectedClasses, totalPrice }) => {
  const { user } = useContextApi();
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  // creating payment intent
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post("/create-payment-intent", { totalPrice }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
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
    // accept card payment
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

    if (paymentIntent.status === "succeeded") {
      console.log(selectedClasses);
      setTransactionId(paymentIntent.id);

      const paymentDetails = {
        email: user.email,
        transactionId: paymentIntent.id,
        totalPrice: totalPrice,
        quantity: selectedClasses.length,
        paidClasses: selectedClasses.map((Class) => Class.name),
      };
      console.log(paymentDetails);

      axiosSecure.post("/payments", paymentDetails).then((res) => {
        if (res.data.insertedId) {
        }
      });
    }
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
      {transactionId && (
        <p className="mt-10 text-green-400">Transaction Id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
