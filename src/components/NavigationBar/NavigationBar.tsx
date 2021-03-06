import React from "react";
import { VscClose } from "react-icons/vsc";

import { allPaymentStages, initialPaymentDetails } from "utils/constants";
import { getNavColor } from "utils/helpers";
import { usePaymentContext } from "utils/context";
import { PaymentStages } from "utils/types";

export default function NavigationBar() {
  const { paymentStage, setPaymentStage, setPaymentDetails } =
    usePaymentContext();

  const navigateStage = (index: number) => {
    if (paymentStage > index) {
      setPaymentStage(index);
    }
  }; // Navigate to a previous stage

  const resetAll = () => {
    setPaymentDetails(initialPaymentDetails);
    setPaymentStage(PaymentStages.AMOUNT);
  }; // reset all the payment details and stage

  return (
    <div className="fixed z-50 top-0 flex justify-center py-6 px-4 bg-white w-full">
      <div className="flex justify-between items-center w-full md:w-[49rem]">
        <img src="./logo.png" alt="Logo" />

        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="flex w-[28rem] h-1 rounded-md bg-gray-200">
            <div
              className={`bg-purple-700 w-${paymentStage}/3 bg-gradient-to-r from-purple-700 via-purple-700 to-gray-600`}
            ></div>
            <div className="w-2 h-2 rounded-full mt-[-2px] bg-gray-600"></div>
          </div>
          <div className="flex mt-2 justify-between w-[29rem]">
            {allPaymentStages.map((stage, index) => {
              const navColor = getNavColor(paymentStage, index);
              // Get nav color of each nav text, based on its positon relative to the payment stage

              return (
                <p
                  className={`text-xs ${navColor} font-semibold cursor-pointer`}
                  onClick={() => navigateStage(index)}
                  key={index}
                >
                  {stage}
                </p>
              );
            })}
          </div>
        </div>
        {/* On mobile view, show only the payment stage name */}
        <p className="text-lg md:hidden text-gray-600 font-semibold">
          {allPaymentStages[paymentStage]}
        </p>

        <button onClick={resetAll} className="p-1 text-2xl text-gray-400">
          <VscClose />
        </button>
      </div>
    </div>
  );
}
