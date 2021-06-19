import { createContext, SetStateAction, useContext } from "react";
import { initialPaymentDetails } from "./constants";
import { PaymentDetailsProps, PaymentStages } from "./types";

interface PaymentContextProps {
  paymentDetails: PaymentDetailsProps;
  paymentStage: PaymentStages;
  setPaymentStage: (value: SetStateAction<PaymentStages>) => void;
  handleChange: (event: any) => void;
}

const PaymentContext = createContext<PaymentContextProps>({
  paymentDetails: initialPaymentDetails,
  handleChange: () => {},
  setPaymentStage: () => {},
  paymentStage: PaymentStages.AMOUNT,
});

export const PaymentProvider = PaymentContext.Provider;
export const PaymentConsumer = PaymentContext.Consumer;

export const usePaymentContext = () => useContext(PaymentContext);
