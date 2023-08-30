import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51NkXQqEoL5f3nSzezzERqXmevq6rPocbZlGkBzA1hTRI0oeUZ7mNQqew4ck3wl0ZhuLzZK91JPrjnB7MpiJ9JW9Y00GhEhVKZl";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
