import { createContext, useContext } from "react";
import { initialPaymentDetails } from "./constants";
import { IPaymentContextProps, PaymentStages } from "./types";

const PaymentContext = createContext<IPaymentContextProps>({
  paymentDetails: initialPaymentDetails,
  setPaymentDetails: () => {},
  handleChange: () => {},
  setPaymentStage: () => {},
  paymentStage: PaymentStages.AMOUNT,
}); // Here, we are initializing our context states

export const PaymentProvider = PaymentContext.Provider;
export const PaymentConsumer = PaymentContext.Consumer;

export const usePaymentContext = () => useContext(PaymentContext);
