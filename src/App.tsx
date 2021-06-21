import React, { ChangeEvent, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import NotFoundPage from "components/NotFoundPage/NotFoundPage";
import SendMoneyPage from "modules/SendMoney/SendMoney";
import { IPaymentDetailsProps, PaymentStages } from "utils/types";
import { initialPaymentDetails } from "utils/constants";
import { PaymentProvider } from "utils/context";

// Hello! This is the root App.js, where the app's logic is stored and shared (using React's Context API)

function App() {
  const [paymentDetails, setPaymentDetails] = useState<IPaymentDetailsProps>(
    initialPaymentDetails
  ); // Here, we initialize the transfer payment details

  const [paymentStage, setPaymentStage] = useState<PaymentStages>(
    PaymentStages.AMOUNT
  ); // And the payment stage is initialized too

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  }; // This is the onChange handler for input fields

  return (
    <PaymentProvider
      value={{
        paymentStage,
        setPaymentStage,
        paymentDetails,
        handleChange,
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
