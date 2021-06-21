import React from "react";
import InputSelect from "components/InputSelect/InputSelect";
import Button from "components/Button/Button";

import ShowTransferInfo from "./components/ShowTransferInfo";
import useAmountDetailsHook from "./useAmountDetailsHook";
import { separateWithComma } from "utils/helpers";

// The AmountDetails component, where most of the conversion logic is used
export default function AmountDetails() {
  const {
    handleSubmitAmountDetails,
    onChangeAmount,
    handleChange,
    senderAmount,
    recipientAmount,
    senderCurrency,
    recipientCurrency,
    allRates,
  } = useAmountDetailsHook();

  return (
    <form onSubmit={handleSubmitAmountDetails}>
      <h2 className="font-bold text-lg text-purple-900">One-time Payout</h2>
      <p className="text-gray-400 text-sm mb-6">Send money internationally</p>

      <InputSelect
        inputProps={{
          value: separateWithComma(senderAmount), // Add commas to separate thousands
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
        countryCode={senderCurrency.toLowerCase().slice(0, -1)} // remove last letter from the currency name to get the country code
      />
      <ShowTransferInfo />
      <div className={`mt-${senderAmount ? "0" : "4"}`}>
        <InputSelect
          inputProps={{
            value: separateWithComma(recipientAmount), // Add commas to separate thousands
            name: "recipientAmount",
            onChange: onChangeAmount,
            label: "Recipient gets",
            required: true,
          }}
          selectProps={{
            options: Object.keys(allRates),
            value: recipientCurrency,
            disabled: true, // I disabled the select because fixer only allows one base recipient currency
          }}
          countryCode={recipientCurrency.toLowerCase().slice(0, -1)}
        />
      </div>
      <div className="flex flex-col md:flex-row mt-6">
        <Button className="text-current-blue border-current-blue font-bold">
          Compare Rates
        </Button>
        <Button
          disabled={Number(recipientAmount) <= 0} // Recipient amount must be more than 0
          type="submit"
          className="mt-4 md:ml-5 md:mt-0 text-white bg-current-blue disabled:bg-purple-400 disabled:border-purple-400 border-current-blue"
        >
          Continue
        </Button>
      </div>
    </form>
  );
}
