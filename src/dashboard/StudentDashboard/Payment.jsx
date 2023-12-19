import React from "react";
import DashboardTitle from "../DashboardTitle/DashboardTitle";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stipePromise = loadStripe(import.meta.env.VITE_paymentPK);

const Payment = () => {
  const [isCollapsed] = useOutletContext();
  return (
    <>
      <Helmet>
        <title>Student Dashboard | Payment</title>
      </Helmet>
      <div
        className={`absolute top-0 right-0 bottom-0 dark:bg-gray-950 transition-all duration-300 ease-in-out ${
          isCollapsed ? `left-16` : ` left-56`
        }`}>
        <DashboardTitle title="Payment"></DashboardTitle>

        {/* stripe card */}
        <div>
          <Elements stripe={stipePromise}>
            <CheckoutForm></CheckoutForm>
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
