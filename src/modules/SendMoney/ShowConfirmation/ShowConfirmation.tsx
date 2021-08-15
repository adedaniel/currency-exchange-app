import React from "react";
import Divider from "components/Divider/Divider";
import { usePaymentContext } from "utils/context";

// Final component to show confirmation
export default function ShowConfirmation() {
  const {
    paymentDetails: {
      recipientAmount,
      recipientCurrency,
      recipientName,
      recipientEmail,
      iban,
    },
  } = usePaymentContext();

  return (
    <div className="">
      <h2 className="font-bold text-lg text-purple-900">Payment Successful!</h2>

      <Divider />
      <div className="flex flex-col space-y-1 justify-center mt-4">
        <p className="text-center">You have successfully sent</p>
        <h1 className="text-center text-3xl text-purple-900 font-bold">
          {recipientAmount} {recipientCurrency}
        </h1>
        <p className="text-center">to</p>

        <div className="flex flex-col justify-center">
          <h1 className="text-center uppercase text-2xl text-gray-800 font-bold">
            {recipientName}
          </h1>
          <p className="text-center">{iban}</p>
          <p className="text-center">{recipientEmail}</p>
        </div>
      </div>
      <Divider className="mt-3" />

      <div className="mt-4"></div>
    </div>
  );
}
