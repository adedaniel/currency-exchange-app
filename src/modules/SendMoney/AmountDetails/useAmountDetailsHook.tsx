/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { usePaymentContext } from "utils/context";
import { PaymentStages } from "utils/types";
import Axios from "axios";
import { getReceiverAmount, getConversionAmount } from "../../../utils/helpers";
import { BASE_API_URL } from "utils/constants";

interface IAllRateProps {
  [currency: string]: { rate: number };
}

const useAmountDetailsHook = () => {
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

  const [allRates, setAllRates] = useState<IAllRateProps>({});

  const fetchRates = () => {
    Axios.get(`${BASE_API_URL}?access_key=8d15f3f6f2e87ee9db02b556c48b0fb4`)
      .then(({ data }) => {
        setAllRates(data.rates);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };

  useEffect(() => {
    fetchRates();
  }, []);

  useEffect(() => {
    handleChange({
      target: {
        name: "rate",
        value: allRates[senderCurrency],
      },
    });
  }, [senderCurrency, allRates]);

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

  const receiverAmount = getReceiverAmount(senderAmount, fee, rate);
  const conversionAmount = getConversionAmount(senderAmount, fee);

  return {
    senderCurrency,
    rate,
    fee,
    receiverCurrency,
    allRates,
    handleChange,
    onChangeAmount,
    handleSubmitAmountDetails,
    senderAmount,
    receiverAmount,
    conversionAmount,
  } as const;
};

export default useAmountDetailsHook;
