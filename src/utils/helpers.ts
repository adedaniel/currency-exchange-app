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
  return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
};

export const getConversionAmount = (senderAmount: string, fee: number) => {
  const conversionAmount = Number(senderAmount) - Number(fee);

  return conversionAmount > 0
    ? conversionAmount.toLocaleString("en-US", { maximumFractionDigits: 2 })
    : 0;
};

export const getReceiverAmount = (
  senderAmount: string,
  fee: number,
  rate: number
) => {
  if (senderAmount && fee && rate) {
    const receiverAmount = (Number(senderAmount) - Number(fee)) / Number(rate);

    return receiverAmount > 0
      ? receiverAmount.toLocaleString("en-US", { maximumFractionDigits: 2 })
      : 0;
  } else {
    return "";
  }
};
