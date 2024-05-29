import React, { useEffect, useRef, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import {
  loadStripe,
  type Stripe,
  type StripeElements,
} from "@stripe/stripe-js";
import axios from "axios";
import { Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { buttonTheme } from "../utils/theme";

const STRIPE_KEY_API = import.meta.env.PUBLIC_STRIPE_API_KEY;
const stripePromise = loadStripe(STRIPE_KEY_API);

interface UserInfo {
  email: String;
  password: String;
  username: String;
  cooperativeName: String;
  cooperativePhoneNumber: String;
}

export interface User {
  user: UserInfo;
}

const SubscriptionCheckout = (user: User) => {
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [elements, setElements] = useState<StripeElements | null>(null);
  const cardNumberElementRef = useRef<HTMLDivElement | null>(null);
  const cardExpiryElementRef = useRef<HTMLDivElement | null>(null);
  const cardCvcElementRef = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState("");
  const [isPaymentProcessing, setIspaymentProcessing] = useState(false);

  useEffect(() => {
    const initStripe = async () => {
      const stripeInit = await loadStripe(STRIPE_KEY_API);
      setStripe(stripeInit);
      if (stripeInit) {
        const elementsInstance = stripeInit.elements();
        setElements(elementsInstance);
        const style = {
          base: {
            lineHeight: "40px",
            fontWeight: 300,
            fontSize: "15px",
            "::placeholder": {
              color: "#CFD7E0",
            },
          },
        };

        const cardNumberElement = elementsInstance.create("cardNumber", {
          showIcon: true,
          style: style,
          placeholder: "4242 4242 4242 4242",
        });
        cardNumberElement.mount(cardNumberElementRef.current as HTMLDivElement);
        const cardExpiryElement = elementsInstance.create("cardExpiry", {
          style: style,
          placeholder: "MM/YY",
        });
        cardExpiryElement.mount(cardExpiryElementRef.current as HTMLDivElement);
        const cardCvcElement = elementsInstance.create("cardCvc", {
          style: style,
          placeholder: "123",
        });
        cardCvcElement.mount(cardCvcElementRef.current as HTMLDivElement);
      }
    };
    initStripe();
    // Cleanup
    return () => {
      if (elements) {
        elements.getElement("cardNumber")?.unmount();
        elements.getElement("cardExpiry")?.unmount();
        elements.getElement("cardCvc")?.unmount();
      }
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIspaymentProcessing(true);
    try {
      if (!stripe || !elements) return;

      const cardNumberElement = elements.getElement("cardNumber");
      if (!cardNumberElement) return;

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardNumberElement,
      });

      if (error) {
        setMessage("Invalid card number or ");
      } else {
        const {data} = await axios.post(
          "/api/monthly-payment",
          {
            amount: 50000,
            user,
            paymentMethodId: paymentMethod.id,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if(data.message === "User created successfully") {
          window.location.href = "/admin"
        }
      }
      setIspaymentProcessing(false);
    } catch (error) {
      setIspaymentProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4 border border-gray-300 rounded-md">
        <div id="cardNumber">
          <div ref={cardNumberElementRef} className=" flex-1"></div>
        </div>
        <div></div>
      </div>
      <div className="mt-4">
        <div id="cardExpiry">
          <div
            ref={cardExpiryElementRef}
            className="border border-gray-300 rounded-md flex-1"
          ></div>
        </div>
      </div>
      <div className="mt-4">
        <div id="cardCvc">
          <div
            ref={cardCvcElementRef}
            className="border border-gray-300 rounded-md flex-1"
          ></div>
        </div>
      </div>
      <div className="flex justify-end w-full">
        <Button
          type="submit"
          isProcessing={isPaymentProcessing}
          className="bg-blue-900 text-white mt-4 px-4 py-2 rounded-md"
        >
          <span id="button-text">Subscribe</span>
        </Button>
      </div>
      {message && <div className="success">{message}</div>}
    </form>
  );
};

export default function SignupForm() {
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    cooperativeName: "",
    cooperativePhoneNumber: "",
    consent: false,
  });

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const { value, name, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const isFormDataFilled = () => {
    const {
      email,
      username,
      password,
      cooperativeName,
      cooperativePhoneNumber,
      consent,
    } = formData;
    return (
      !!email &&
      !!username &&
      !!password &&
      !!cooperativeName &&
      !!cooperativePhoneNumber &&
      consent
    );
  };

  const isDisabled = !isFormDataFilled();

  return (
    <div className="max-w-xl mx-auto mt-16">
      {!openPaymentModal ? (
        <div>
          <div className="shadow-2xl max-w-max mx-auto rounded-md py-14 px-20">
            <p className="text-base font-bold mb-8">
              Been here before? Log in for faster booking
            </p>
            <a
              href="/admin/user/signin"
              target="_blank"
              className="uppercase bg-blue-800 px-4 py-5 rounded-lg text-white font-medium text-sm"
            >
              Log in to my account
            </a>
          </div>
          <div className="max-w-xl mx-auto mt-16">
            <fieldset className="flex flex-col my-8">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="h-14 rounded-md pl-4 border border-blue-900"
                required
              />
            </fieldset>
            <fieldset className="flex flex-col my-8">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="h-14 rounded-md pl-4 border border-blue-900"
                required
              />
            </fieldset>
            <fieldset className="flex flex-col my-8">
              <label htmlFor="cooperativeName">Cooperative Name:</label>
              <input
                type="text"
                name="cooperativeName"
                value={formData.cooperativeName}
                onChange={handleChange}
                placeholder="Cooperative Name"
                className="h-14 rounded-md pl-4 border border-blue-900"
                required
              />
            </fieldset>
            <fieldset className="flex flex-col my-8">
              <label htmlFor="cooperativePhoneNumber">
                Cooperative Contact:
              </label>
              <input
                type="tel"
                value={formData.cooperativePhoneNumber}
                name="cooperativePhoneNumber"
                pattern="[\d]{9}"
                placeholder="cooperative Phone Number"
                onChange={handleChange}
                className="h-14 rounded-md pl-4 border border-blue-900"
                required
              />
            </fieldset>
            <fieldset className="flex flex-col my-8">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="password"
                className="h-14 rounded-md pl-4 border border-blue-900"
                required
              />
            </fieldset>
            <fieldset className="flex items-center gap-x-3 my-4">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                className="w-12 h-12"
                onChange={handleChange}
                checked={formData.consent}
              />
              <label htmlFor="consent" className="text-base">
                By submitting my data, I agree to the{" "}
                <a href="/policy" className="text-blue-900 text-base underline">
                  privacy policy.
                </a>
              </label>
            </fieldset>
            <p id="form-error"></p>
            <div className="flex justify-end w-sm">
              <Button
                type="button"
                color="primary"
                theme={buttonTheme}
                disabled={isDisabled}
                onClick={() => setOpenPaymentModal(true)}
                className="font-bold"
              >
                Continue to payment
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => setOpenPaymentModal(true)}
            className="text-blue-900 font-semibold underline"
          >
            <span>
              <FontAwesomeIcon icon={faAngleLeft} />
            </span>
            <span className="pl-2">Go back to user details</span>
          </button>
          <Elements stripe={stripePromise}>
            <SubscriptionCheckout user={formData} />
          </Elements>
        </div>
      )}
    </div>
  );
}