import React from "react";
import Button from "components/Button/Button";
import { usePaymentContext } from "utils/context";

export default function ToggleInsideEurope() {
  const {
    paymentDetails: { insideEurope },
    handleChange,
  } = usePaymentContext();

  const toggleInEurope = (value: boolean) => {
    handleChange({
      target: {
        name: "insideEurope",
        value,
      },
    });
  };

  return (
    <div className="flex mb-[-1px]">
      <Button
        onClick={() => toggleInEurope(true)}
        className={`border-0 w-32 rounded-none h-8 border-b-2 ${
          insideEurope
            ? "border-current-blue text-current-blue font-bold"
            : "border-gray-100 text-gray-400"
        } text-sm`}
      >
        Inside Europe
      </Button>
      <Button
        onClick={() => toggleInEurope(false)}
        className={`border-0 w-32 rounded-none h-8 border-b-2 ${
          !insideEurope
            ? "border-current-blue text-current-blue font-bold"
            : "border-gray-100 text-gray-400"
        } text-sm`}
      >
        Outside Europe
      </Button>
    </div>
  );
}
