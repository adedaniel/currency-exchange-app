import React, { useState } from "react";

import SendMoney from "modules/SendMoney/SendMoney";
import { PaymentDetailsProps, PaymentStages } from "utils/types";
import { initialPaymentDetails } from "utils/constants";
import { PaymentProvider } from "utils/context";

function App() {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetailsProps>(
    initialPaymentDetails
  );

  const [paymentStage, setPaymentStage] = useState<PaymentStages>(
    PaymentStages.AMOUNT
  );

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  return (
    <PaymentProvider
      value={{ paymentStage, setPaymentStage, paymentDetails, handleChange }}
    >
      <SendMoney />
    </PaymentProvider>
  );
}

export default App;
