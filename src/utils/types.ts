import { SetStateAction } from "react";

export interface IPaymentDetailsProps {
  senderAmount: string;
  recipientAmount: string;
  senderCurrency: string;
  recipientCurrency: string;
  insideEurope: boolean;
  fee: number;
  rate: number;
  recipientName: string;
  recipientEmail: string;
  iban: string;
  swiftCode: string;
}

export enum PaymentStages {
  AMOUNT,
  RECIPIENT,
  REVIEW,
  PAY,
}

export interface IPaymentContextProps {
  paymentDetails: IPaymentDetailsProps;
  setPaymentDetails: (value: SetStateAction<IPaymentDetailsProps>) => void;
  paymentStage: PaymentStages;
  setPaymentStage: (value: SetStateAction<PaymentStages>) => void;
  handleChange: (event: any) => void;
}
