import React from 'react'
import NavigationBar from 'components/NavigationBar/NavigationBar'
import AmountDetails from './AmountDetails/AmountDetails'
import RecipientDetails from './RecipientDetails/RecipientDetails'
import ReviewDetails from './ReviewDetails/ReviewDetails'

function SendMoney() {
  return (
    <div className="bg-current-bg px-3 flex justify-center min-h-screen">
      <NavigationBar />
      <div className="py-28 md:pt-36 w-full md:w-[30rem]">
        <div className="border-gray-200 border-[1px] rounded-lg bg-white w-full px-4 md:px-8 py-6">
          {/* <AmountDetails /> */}
          {/* <RecipientDetails /> */}
          <ReviewDetails />
        </div>
      </div>
    </div>
  )
}

export default SendMoney
