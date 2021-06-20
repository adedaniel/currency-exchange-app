/* eslint-disable no-useless-escape */
import React from "react";
import InputSelect from "components/InputSelect/InputSelect";
import Button from "components/Button/Button";

import ShowTransferInfo from "./components/ShowTransferInfo";
import useAmountDetailsHook from "./useAmountDetailsHook";

export default function AmountDetails() {
  const {
    handleSubmitAmountDetails,
    onChangeAmount,
    handleChange,
    senderAmount,
    receiverAmount,
    senderCurrency,
    receiverCurrency,
    allRates,
  } = useAmountDetailsHook();

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
          required: true,
        }}
        selectProps={{
          onChange: handleChange,
          name: "senderCurrency",
          value: senderCurrency,
          options: Object.keys(allRates),
        }}
        country={senderCurrency.toLowerCase().slice(0, -1)}
      />
      <ShowTransferInfo />
      <div className={`mt-${senderAmount ? "0" : "4"}`}>
        <InputSelect
          inputProps={{
            name: "receiverAmount",
            value: receiverAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            label: "Recipient gets",
            onChange: onChangeAmount,
            required: true,
          }}
          selectProps={{
            options: [receiverCurrency],
            disabled: true,
          }}
          country={receiverCurrency.toLowerCase().slice(0, -1)}
        />
      </div>
      <div className="flex flex-col md:flex-row mt-6">
        <Button className="text-current-blue border-current-blue font-bold">
          Compare Rates
        </Button>
        <Button
          disabled={!receiverAmount}
          type="submit"
          className="mt-4 md:ml-5 md:mt-0 text-white bg-current-blue disabled:bg-purple-400 disabled:border-purple-400 border-current-blue"
        >
          Continue
        </Button>
      </div>
    </form>
  );
}
