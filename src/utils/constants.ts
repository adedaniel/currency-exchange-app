import { IPaymentDetailsProps } from "./types";

export const allPaymentStages = ["Amount", "Recipient", "Review", "Pay"];

export const BASE_API_URL =
  "https://v6.exchangerate-api.com/v6/7df3dc092ddf0f737355b2bb/latest";

export const initialPaymentDetails: IPaymentDetailsProps = {
  senderAmount: "",
  recipientAmount: "",
  senderCurrency: "USD",
  recipientCurrency: "EUR",
  insideEurope: true,
  fee: 3.69, // I assumed a static fee of 3.69 of whatever the sender currency is
  rate: 0,
  recipientName: "",
  recipientEmail: "",
  iban: "",
  swiftCode: "",
};
