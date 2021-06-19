/* eslint-disable no-useless-escape */
import React, { ChangeEvent, FormEvent } from "react";
import InputSelect from "components/InputSelect/InputSelect";
import Button from "components/Button/Button";
import { usePaymentContext } from "utils/context";
import { PaymentStages } from "utils/types";

export default function AmountDetails() {
  const {
    paymentDetails: {
      senderAmount,
      senderCurrency,
      receiverCurrency,
      rate,
      fee,
    },
    handleChange,
    setPaymentStage,
  } = usePaymentContext();

  const handleSubmitAmountDetails = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPaymentStage(PaymentStages.RECIPIENT);
  };

  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    if (
      !event.target.value ||
      event.target.value.replace(/\,/g, "").match(/^-?\d*\.?\d*$/)
    ) {
      handleChange({
        target: {
          name: event.target.name,
          value: event.target.value.replace(/\,/g, ""),
        },
      });
    }
  };

  const getReceiverAmount = () => {
    if (senderAmount && fee && rate) {
      const receiverAmount =
        (Number(senderAmount) - Number(fee)) * Number(rate);

      return receiverAmount > 0
        ? receiverAmount.toLocaleString("en-US").toString()
        : "0";
    } else {
      return "";
    }
  };

  return (
    <form onSubmit={handleSubmitAmountDetails}>
      <h2 className="font-bold text-lg text-purple-900">One-time Payout</h2>
      <p className="text-gray-400 text-sm mb-6">Send money internationally</p>

      <InputSelect
        inputProps={{
          value: senderAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          name: "senderAmount",
          onChange: onChangeAmount,
          label: "You send",
        }}
        selectProps={{}}
      />
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
            <p className="font-medium w-24">
              {fee} {senderCurrency}
            </p>
            <p className="font-medium">Transfer fee</p>
          </div>
          <div className="flex mb-3">
            <p className="font-medium w-24">996.31 {receiverCurrency}</p>
            <p className="font-medium">Amount we’ll convert</p>
          </div>
          <div className="flex font-semibold text-purple-900">
            <p className="w-24">{rate}</p>
            <p>Guaranteed rate (1hr)</p>
          </div>
        </div>
      </div>
      <div className={`mt-${senderAmount ? "0" : "4"}`}>
        <InputSelect
          inputProps={{
            value: getReceiverAmount(),
            label: "Recipient gets",
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row mt-6">
        <Button className="text-current-blue border-current-blue font-bold">
          Compare Rates
        </Button>
        <Button
          disabled={!senderAmount}
          type="submit"
          className="mt-4 md:ml-5 md:mt-0 text-white bg-current-blue disabled:bg-purple-400 disabled:border-purple-400 border-current-blue"
        >
          Continue
        </Button>
      </div>
    </form>
  );
}
