import React, { FormEvent } from "react";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Divider from "components/Divider/Divider";
import { PaymentStages } from "utils/types";
import { usePaymentContext } from "utils/context";

import ToggleInsideEurope from "./components/ToggleInsideEurope";

// This component allows the inputing of the recipent details
export default function RecipientDetails() {
  const {
    paymentDetails: {
      recipientName,
      recipientEmail,
      iban,
      swiftCode,
      insideEurope,
    },
    handleChange,
    setPaymentStage,
  } = usePaymentContext();

  const handleSubmitRecipientDetails = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPaymentStage(PaymentStages.REVIEW); // Proceed to next stage
  };

  return (
    <form onSubmit={handleSubmitRecipientDetails}>
      <h2 className="font-bold text-lg text-purple-900">Your Recipient</h2>
      <p className="text-gray-400 text-sm mb-2">
        Who are you sending money to?
      </p>
      <Divider />
      <div className="mt-5">
        <div>
          <Input
            value={recipientEmail}
            onChange={handleChange}
            name="recipientEmail"
            type="email"
            label="Their email (optional)"
          />
        </div>
        <div className="mt-4">
          <Input
            value={recipientName}
            onChange={handleChange}
            name="recipientName"
            required
            label="Full name of the account holder"
          />
        </div>
      </div>

      <h2 className="font-bold text-sm mt-5 text-purple-900">Bank details</h2>
      <Divider className="mt-3" />

      <ToggleInsideEurope />
      <Divider className="my-0 h-px" />

      {insideEurope && (
        <div className="mt-4">
          <Input
            value={iban}
            onChange={handleChange}
            name="iban"
            label="IBAN"
            required
            placeholder="DE98370440018929829032"
          />
        </div>
      )}

      {!insideEurope && (
        <div className="mt-4">
          <div>
            <Input
              value={swiftCode}
              onChange={handleChange}
              name="swiftCode"
              label="SWIFT / BIC code"
              required
              placeholder="BUKBGB22"
            />
          </div>
          <div className="mt-4">
            <Input
              value={iban}
              onChange={handleChange}
              name="iban"
              label="IBAN / Account Number"
              required
              placeholder="01234567891"
            />
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row mt-6">
        <Button
          type="submit"
          className="text-white bg-current-blue border-current-blue"
        >
          Continue
        </Button>
      </div>
    </form>
  );
}
