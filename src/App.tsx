import React, { ChangeEvent, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import NotFoundPage from "components/NotFoundPage/NotFoundPage";
import SendMoneyPage from "modules/SendMoney/SendMoney";
import { IPaymentDetailsProps, PaymentStages } from "utils/types";
import { initialPaymentDetails } from "utils/constants";
import { PaymentProvider } from "utils/context";

function App() {
  const [paymentDetails, setPaymentDetails] = useState<IPaymentDetailsProps>(
    initialPaymentDetails
  );

  const [paymentStage, setPaymentStage] = useState<PaymentStages>(
    PaymentStages.AMOUNT
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const resetPaymentDetails = () => {
    setPaymentDetails(initialPaymentDetails);
  };

  return (
    <PaymentProvider
      value={{
        paymentStage,
        setPaymentStage,
        paymentDetails,
        handleChange,
        resetPaymentDetails,
        setPaymentDetails,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SendMoneyPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </PaymentProvider>
  );
}

export default App;
