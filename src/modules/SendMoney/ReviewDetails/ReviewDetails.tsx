import React from "react";
import Button from "components/Button/Button";
import Divider from "components/Divider/Divider";
import { usePaymentContext } from "utils/context";
import {
  getConversionAmount,
  getReceiverAmount,
  separateWithComma,
} from "utils/helpers";

export default function ReviewDetails() {
  const {
    paymentDetails: {
      senderAmount,
      senderCurrency,
      receiverCurrency,
      insideEurope,
      fee,
      rate,
      receiverName,
      receiverEmail,
      iban,
      swiftCode,
    },
  } = usePaymentContext();

  const receiverAmount = getReceiverAmount(senderAmount, fee, rate);
  const conversionAmount = getConversionAmount(senderAmount, fee);

  return (
    <div className="">
      <h2 className="font-bold text-lg text-purple-900">
        Review details of your transfer
      </h2>

      <Divider />
      <div className="mt-4">
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">You send</p>
          <p className="text-base font-bold">
            {separateWithComma(senderAmount)} {senderCurrency}
          </p>
        </div>
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">Total fees (included)</p>
          <p className="text-sm">
            {fee} {senderCurrency}
          </p>
        </div>
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">Amount we’ll convert</p>
          <p className="text-sm">
            {conversionAmount} {senderCurrency}
          </p>
        </div>
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">Guaranteed rate</p>
          <p className="text-sm">{rate}</p>
        </div>
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">
            {receiverName.split(" ")[0]} gets
          </p>
          <p className="text-base font-bold">
            {receiverAmount} {receiverCurrency}
          </p>
        </div>
      </div>
      <Divider className="mt-3" />

      <div className="mt-4">
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">Name</p>
          <p className="text-sm capitalize">{receiverName}</p>
        </div>
        {receiverEmail && (
          <div className="flex my-3 justify-between items-center">
            <p className="text-gray-400 text-sm">Email address</p>
            <p className="text-sm">{receiverEmail}</p>
          </div>
        )}
        {insideEurope && (
          <div className="flex my-3 justify-between items-center">
            <p className="text-gray-400 text-sm">IBAN / Account number</p>
            <p className="text-sm">{iban}</p>
          </div>
        )}
        {!insideEurope && (
          <>
            <div className="flex my-3 justify-between items-center">
              <p className="text-gray-400 text-sm">SWIFT / BIC code</p>
              <p className="text-sm">{swiftCode}</p>
            </div>
            <div className="flex my-3 justify-between items-center">
              <p className="text-gray-400 text-sm">IBAN</p>
              <p className="text-sm">{iban}</p>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col md:flex-row mt-8">
        <Button className="text-white bg-current-green border-current-green">
          Confirm and continue
        </Button>
      </div>
    </div>
  );
}
