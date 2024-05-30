import React, { useState, type FormEvent } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string | null>("" || null);
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message || null);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(event) => {
          setEmail(event.value.email);
        }}
      />
      <PaymentElement id="payment-element" />
      <div className="flex flex-row-reverse items-center justify-center mt-6">
        <button
          type="submit"
          className="bg-blue-900 text-white w-32 h-14 rounded-md"
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        <button
          onClick={() => window.history.back()}
          className="border px-6 h-14 rounded-md mr-8"
        >
          Go Back
        </button>
      </div>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
