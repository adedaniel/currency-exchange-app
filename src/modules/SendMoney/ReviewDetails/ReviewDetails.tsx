import React from 'react'
import Button from 'components/Button/Button'
import Divider from 'components/Divider/Divider'

export default function ReviewDetails() {
  return (
    <div className="">
      <h2 className="font-bold text-lg text-purple-900">
        Review details of your transfer
      </h2>

      <Divider />
      <div className="mt-4">
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">You send</p>
          <p className="text-base font-bold">1,000 USD</p>
        </div>
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">Total fees (included)</p>
          <p className="text-sm">3.69 USD</p>
        </div>
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">Amount we’ll convert</p>
          <p className="text-sm">996.31 USD</p>
        </div>
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">Guaranteed rate</p>
          <p className="text-sm">1.10289</p>
        </div>
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">Johnny gets</p>
          <p className="text-base font-bold">1,248.63 EUR</p>
        </div>
      </div>
      <Divider className="mt-3" />

      <div className="mt-4">
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">Name</p>
          <p className="text-sm">Johnny Gbadamosi</p>
        </div>
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">Email address</p>
          <p className="text-sm">johnny.gbadamosi@gmail.com</p>
        </div>
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">IBAN / Account number</p>
          <p className="text-sm">DE898919013902102</p>
        </div>
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">SWIFT / BIC code</p>
          <p className="text-sm">BUKBGB22</p>
        </div>
        <div className="flex my-3 justify-between items-center">
          <p className="text-gray-400 text-sm">IBAN</p>
          <p className="text-sm">01234567891</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-8">
        <Button className="text-white bg-current-green border-current-green">
          Confirm and continue
        </Button>
      </div>
    </div>
  )
}
