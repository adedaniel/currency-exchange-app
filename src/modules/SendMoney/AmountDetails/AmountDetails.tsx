import React from 'react'
import InputSelect from 'components/InputSelect/InputSelect'
import Button from 'components/Button/Button'

export default function AmountDetails() {
  return (
    <div>
      <h2 className="font-bold text-lg text-purple-900">One-time Payout</h2>
      <p className="text-gray-400 text-sm mb-6">Send money internationally</p>

      <InputSelect />
      <div className="flex pl-3 items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="h-4 w-0.5 bg-gray-200" />
          <div className="flex items-center text-gray-400 justify-center w-4 h-4 bg-gray-200 rounded-full">
            -
          </div>
          <div className="h-4 w-0.5 bg-gray-200" />
          <div className="flex items-center text-gray-400 justify-center w-4 h-4 bg-gray-200 rounded-full">
            =
          </div>
          <div className="h-4 w-0.5 bg-gray-200" />
          <div className="flex items-center text-sm text-gray-400 justify-center w-4 h-4 bg-gray-200 rounded-full">
            x
          </div>
          <div className="h-4 w-0.5 bg-gray-200" />
        </div>
        <div className="ml-3 text-gray-500 text-sm">
          <div className="flex mb-3">
            <p className="font-medium w-24">3.69 USD</p>
            <p className="font-medium">Transfer fee</p>
          </div>
          <div className="flex mb-3">
            <p className="font-medium w-24">996.31 EUR</p>
            <p className="font-medium">Amount we’ll convert</p>
          </div>
          <div className="flex font-semibold text-purple-900">
            <p className="w-24">1.14989</p>
            <p>Guaranteed rate (1hr)</p>
          </div>
        </div>
      </div>
      <InputSelect />
      <div className="flex flex-col md:flex-row mt-6">
        <Button className="text-current-blue border-current-blue font-bold">
          Compare Rates
        </Button>
        <Button className="mt-4 md:ml-5 md:mt-0 text-white bg-current-blue border-current-blue">
          Continue
        </Button>
      </div>
    </div>
  )
}
