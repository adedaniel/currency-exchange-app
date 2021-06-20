/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Axios from "axios";
import { usePaymentContext } from "utils/context";
import { PaymentStages } from "utils/types";
import staticRates from "utils/rates.json";
import {
  getUpdatedReceiverAmount,
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
    receiverAmount,
    senderCurrency,
    receiverCurrency,
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
          setAllRates(staticRates);
        }
      })
      .catch(({ response }) => {
        console.log(response);
        setAllRates(staticRates);
      });
  };

  useEffect(() => {
    fetchRates();
  }, []);

  useEffect(() => {
    setPaymentDetails({
      ...paymentDetails,
      rate: allRates[senderCurrency],
    });
  }, [senderCurrency, allRates]);

  const handleSubmitAmountDetails = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPaymentStage(PaymentStages.RECIPIENT);
  };

  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value: valueWithStrings } = event.target;

    const value = valueWithStrings.replace(/\,/g, "");

    if (!value || value.match(/^-?\d*\.?\d*$/)) {
      const updatedAmounts = () => {
        if (name === "senderAmount") {
          return {
            senderAmount: value,
            receiverAmount: getUpdatedReceiverAmount(value, fee, rate),
          };
        } else if (name === "receiverAmount") {
          return {
            receiverAmount: value,
            senderAmount: getUpdatedSenderAmount(value, fee, rate),
          };
        }
      };

      setPaymentDetails({
        ...paymentDetails,
        ...updatedAmounts(),
      });
    }
  };

  const conversionAmount = getConversionAmount(senderAmount, fee);

  return {
    senderCurrency,
    rate,
    fee,
    receiverCurrency,
    allRates,
    onChangeAmount,
    handleChange,
    handleSubmitAmountDetails,
    senderAmount,
    receiverAmount,
    conversionAmount,
  } as const;
};

export default useAmountDetailsHook;
