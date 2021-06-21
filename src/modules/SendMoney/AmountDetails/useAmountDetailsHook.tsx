/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Axios from "axios";

import { usePaymentContext } from "utils/context";
import { PaymentStages } from "utils/types";
import staticRates from "utils/rates.json";
import {
  getUpdatedRecipientAmount,
  getConversionAmount,
  getUpdatedSenderAmount,
} from "utils/helpers";
import { BASE_API_URL } from "utils/constants";

interface IAllRateProps {
  [currency: string]: number;
}

const useAmountDetailsHook = () => {
  const { paymentDetails, setPaymentDetails, handleChange, setPaymentStage } =
    usePaymentContext();

  const {
    senderAmount,
    recipientAmount,
    senderCurrency,
    recipientCurrency,
    rate,
    fee,
  } = paymentDetails;

  const [allRates, setAllRates] = useState<IAllRateProps>({});

  const fetchRates = () => {
    Axios.get(`${BASE_API_URL}?access_key=8d15f3f6f2e87ee9db02b556c48b0fb4`)
      .then(({ data }) => {
        if (data.rates) {
          setAllRates(data.rates);
        } else {
          // If there was an error,
          setAllRates(staticRates); // Populate the rates with static rates in rates.json
        }
      })
      .catch(({ response }) => {
        // Or If CORS blocked the request (which is most likely on the production mode),
        console.log(response);
        setAllRates(staticRates); // Also, Populate the rates with static rates in rates.json
      });
  }; // Fetch all rates

  useEffect(() => {
    fetchRates();
  }, []);

  useEffect(() => {
    const updatedRecipientAmount = getUpdatedRecipientAmount(
      senderAmount.replace(/,/g, ""),
      fee,
      allRates[senderCurrency]
    ); // calculate the updated recipient amount based on new the rate

    setPaymentDetails({
      ...paymentDetails,
      rate: allRates[senderCurrency],
      recipientAmount: updatedRecipientAmount,
    });
  }, [senderCurrency, allRates]); // anytime the sender currency changes, update the rate and the recipient amount also

  const handleSubmitAmountDetails = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPaymentStage(PaymentStages.RECIPIENT); // Move to the next stage
  };

  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value: valueWithStrings } = event.target;

    const value = valueWithStrings.replace(/,/g, ""); //remove commas before making calculations

    if (!value || value.match(/^-?\d*\.?\d*$/)) {
      // Unless empty, Allow only numbers to be inputed
      const updatedAmounts = () => {
        if (name === "senderAmount") {
          return {
            senderAmount: value,
            recipientAmount: getUpdatedRecipientAmount(value, fee, rate), // calculate the respective recipientAmount
          };
        } else if (name === "recipientAmount") {
          return {
            recipientAmount: value,
            senderAmount: getUpdatedSenderAmount(value, fee, rate), // calculate the respective senderAmount
          };
        }
      };

      setPaymentDetails({
        ...paymentDetails,
        ...updatedAmounts(),
      }); // update the payment details
    }
  };

  const conversionAmount = getConversionAmount(senderAmount, fee); // get the conversion amount

  return {
    senderCurrency,
    rate,
    fee,
    recipientCurrency,
    allRates,
    senderAmount,
    recipientAmount,
    conversionAmount,
    onChangeAmount,
    handleChange,
    handleSubmitAmountDetails,
  } as const;
};

export default useAmountDetailsHook;
