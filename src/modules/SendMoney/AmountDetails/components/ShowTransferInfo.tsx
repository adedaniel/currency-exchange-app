import React from "react";
import useAmountDetailsHook from "../useAmountDetailsHook";

// This one doesn't do much, just displays the already calculated values
export default function ShowTransferInfo() {
  const { conversionAmount, senderAmount, senderCurrency, rate, fee } =
    useAmountDetailsHook();

  return (
    <div
      className={`flex pl-3 h-${
        senderAmount ? "auto" : "0"
      } overflow-hidden items-center`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="h-4 w-0.5 bg-gray-200" />
        <div className="flex items-center text-gray-400 justify-center w-4 h-4 bg-gray-200 rounded-full">
          -
        </div>
        <div className="h-4 w-0.5 bg-gray-200" />
        <div className="flex items-center text-gray-400 justify-center w-4 h-4 bg-gray-200 rounded-full">
          =
        </div>
        <div className="h-4 w-0.5 bg-gray-200" />
        <div className="flex items-center text-sm text-gray-400 justify-center w-4 h-4 bg-gray-200 rounded-full">
          x
        </div>
        <div className="h-4 w-0.5 bg-gray-200" />
      </div>
      <div className="ml-3 text-gray-500 text-sm">
        <div className="flex mb-3">
          <p className="font-medium w-28">
            {fee} {senderCurrency}
          </p>
          <p className="font-medium">Transfer fee</p>
        </div>
        <div className="flex mb-3">
          <p className="font-medium break-all w-28">
            {conversionAmount} {senderCurrency}
          </p>
          <p className="font-medium">Amount we’ll convert</p>
        </div>
        <div className="flex font-semibold text-purple-900">
          <p className="w-28">{rate}</p>
          <p>Guaranteed rate (Today)</p>
        </div>
      </div>
    </div>
  );
}
