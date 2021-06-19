export interface PaymentDetailsProps {
  senderAmount: string;
  senderCurrency: string;
  receiverCurrency: string;
  insideEurope: boolean;
  fee: string;
  rate: string;
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
