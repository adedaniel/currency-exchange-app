import { SetStateAction } from "react";

export interface IPaymentDetailsProps {
  senderAmount: string;
  senderCurrency: string;
  receiverCurrency: string;
  insideEurope: boolean;
  fee: number;
  rate: number;
  receiverName: string;
  receiverEmail: string;
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
  paymentStage: PaymentStages;
  setPaymentStage: (value: SetStateAction<PaymentStages>) => void;
  handleChange: (event: any) => void;
}
