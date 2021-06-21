export const getNavColor = (paymentStage: number, index: number) => {
  if (paymentStage < index) {
    return "text-gray-300";
  } else if (paymentStage === index) {
    return "text-gray-600";
  } else if (paymentStage > index) {
    return "text-purple-700";
  }
};

export const separateWithComma = (number: string | number) => {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

export const getConversionAmount = (senderAmount: string, fee: number) => {
  const conversionAmount = Number(senderAmount.replace(/,/g, "")) - Number(fee);

  return conversionAmount > 0
    ? conversionAmount.toLocaleString("en-US", { maximumFractionDigits: 2 })
    : 0;
}; // Calculate conversion amount based on the senderAmount and fee

export const getUpdatedRecipientAmount = (
  senderAmount: string,
  fee: number,
  rate: number
) => {
  if (senderAmount && fee && rate) {
    const recipientAmount = (Number(senderAmount) - Number(fee)) / Number(rate);

    return recipientAmount > 0
      ? recipientAmount.toLocaleString("en-US", { maximumFractionDigits: 2 }) // Round amount to 2 d.p and inser commas
      : "0";
  } else {
    return "";
  }
}; // Calculate recipient amount from the sender amount, fee and rate

export const getUpdatedSenderAmount = (
  recipientAmount: string,
  fee: number,
  rate: number
) => {
  if (recipientAmount && fee && rate) {
    const senderAmount = Number(recipientAmount) * Number(rate) + Number(fee);

    return senderAmount > 0
      ? senderAmount.toLocaleString("en-US", { maximumFractionDigits: 2 }) // Round amount to 2 d.p and inser commas
      : "0";
  } else {
    return "";
  }
}; // Calculate sender amount from the sender amount, fee and rate
