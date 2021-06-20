import { createContext, useContext } from "react";
import { initialPaymentDetails } from "./constants";
import { IPaymentContextProps, PaymentStages } from "./types";

const PaymentContext = createContext<IPaymentContextProps>({
  paymentDetails: initialPaymentDetails,
  handleChange: () => {},
  setPaymentStage: () => {},
  paymentStage: PaymentStages.AMOUNT,
  resetPaymentDetails: () => {},
});

export const PaymentProvider = PaymentContext.Provider;
export const PaymentConsumer = PaymentContext.Consumer;

export const usePaymentContext = () => useContext(PaymentContext);
