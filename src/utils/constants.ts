import { IPaymentDetailsProps } from "./types";

export const allPaymentStages = ["Amount", "Recipient", "Review", "Pay"];

export const BASE_API_URL = "https://data.fixer.io/api/latest";

export const initialPaymentDetails: IPaymentDetailsProps = {
  senderAmount: "",
  senderCurrency: "USD",
  receiverCurrency: "EUR",
  insideEurope: true,
  fee: 3.69,
  rate: 0,
  receiverName: "",
  receiverEmail: "",
  iban: "",
  swiftCode: "",
};
