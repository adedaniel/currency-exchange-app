import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import NavigationBar from "components/NavigationBar/NavigationBar";
import { PaymentStages } from "utils/types";
import { usePaymentContext } from "utils/context";

import AmountDetails from "./AmountDetails/AmountDetails";
import RecipientDetails from "./RecipientDetails/RecipientDetails";
import ReviewDetails from "./ReviewDetails/ReviewDetails";
import ShowConfirmation from "./ShowConfirmation/ShowConfirmation";
import ErrorPage from "components/ErrorPage/ErrorPage";

function SendMoney() {
  const { paymentStage } = usePaymentContext();

  return (
    <div className="bg-current-bg px-3 flex justify-center min-h-screen">
      <NavigationBar />
      <div className="py-28 md:pt-36 w-full md:w-[30rem]">
        <div className="border-gray-200 border-[1px] rounded-lg bg-white w-full px-4 md:px-8 py-6">
          {/* Switch between the different components based on the payment stage */}
          {paymentStage === PaymentStages.AMOUNT && <AmountDetails />}
          {paymentStage === PaymentStages.RECIPIENT && <RecipientDetails />}
          {paymentStage === PaymentStages.REVIEW && <ReviewDetails />}
          {paymentStage === PaymentStages.PAY && <ShowConfirmation />}
        </div>
      </div>
    </div>
  );
}

export default function SendMoneyPage() {
  // This component wraps the main code with an error boundary, just incase anything goes wrong
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <SendMoney />
    </ErrorBoundary>
  );
}
