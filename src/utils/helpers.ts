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
