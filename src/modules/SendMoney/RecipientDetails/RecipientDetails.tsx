import React from 'react'
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import Divider from 'components/Divider/Divider'

export default function RecipientDetails() {
  return (
    <div>
      <h2 className="font-bold text-lg text-purple-900">Your Recipient</h2>
      <p className="text-gray-400 text-sm mb-2">
        Who are you sending money to?
      </p>
      <Divider />
      <div className="mt-5">
        <div>
          <Input label="Their email (optional)" />
        </div>
        <div className="mt-4">
          <Input label="Full name of the account holder" />
        </div>
      </div>

      <h2 className="font-bold text-sm mt-5 text-purple-900">Bank details</h2>
      <Divider className="mt-3" />

      <div className="flex mb-[-1px]">
        <Button className="border-0 w-32 rounded-none h-8 border-b-2 border-current-blue text-current-blue font-bold text-sm">
          Inside Europe
        </Button>
        <Button className="border-0 w-32 rounded-none h-8 border-b-2 border-gray-100 text-gray-400 text-sm">
          Outside Europe
        </Button>
      </div>
      <Divider className="my-0 h-px" />

      <div className="mt-4">
        <Input label="IBAN" placeholder="DE98370440018929829032" />
      </div>

      <div className="mt-4">
        <div>
          <Input label="SWIFT / BIC code" placeholder="BUKBGB22" />
        </div>
        <div className="mt-4">
          <Input label="IBAN / Account Number" placeholder="01234567891" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-6">
        <Button className="text-white bg-current-blue border-current-blue">
          Continue
        </Button>
      </div>
    </div>
  )
}
