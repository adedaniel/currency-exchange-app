import React from 'react'
import { VscClose } from 'react-icons/vsc'

export default function NavigationBar() {
  return (
    <div className="fixed top-0 flex justify-center py-6 px-4 bg-white w-full">
      <div className="flex justify-between items-center w-full md:w-[49rem]">
        <img src="./logo.png" alt="Logo" />

        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="flex w-[28rem] h-1 rounded-md bg-gray-200">
            <div className="bg-purple-700 w-0/3 bg-gradient-to-r from-purple-700 via-purple-700 to-gray-600"></div>
            <div className="w-2 h-2 rounded-full mt-[-2px] bg-gray-600"></div>
          </div>
          <div className="flex mt-2 justify-between w-[29rem]">
            <p className="text-xs text-purple-700 font-semibold">Amount</p>
            <p className="text-xs text-purple-700 font-semibold">Recipient</p>
            <p className="text-xs text-gray-600 font-semibold">Review</p>
            <p className="text-xs text-gray-300 font-semibold">Pay</p>
          </div>
        </div>
        <p className="text-lg md:hidden text-gray-600 font-semibold">Review</p>

        <button className="p-1 text-2xl text-gray-400">
          <VscClose />
        </button>
      </div>
    </div>
  )
}
