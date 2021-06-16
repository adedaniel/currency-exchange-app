import React from 'react'
import NavigationBar from 'components/NavigationBar/NavigationBar'

function App() {
  return (
    <div className="bg-gray-50 flex justify-center min-h-screen">
      <NavigationBar />
      <div className="pt-36">
        <div className="border-gray-200 border-[1px] rounded-lg bg-white px-8 py-6">
          <h2 className="font-bold text-lg text-purple-900">One-time Payout</h2>
          <p className="text-gray-500 mb-6">Send money internationally</p>

          <div className="flex">
            <div className="relative">
              <p className="absolute top-2 text-gray-400 left-4 text-sm">
                You send
              </p>
              <input className="border-[1px] border-gray-300 rounded-md rounded-r-none border-r-0 px-4 w-72 pt-3 text-purple-900 text-xl h-16" />
            </div>
            <div className="flex h-16 w-32 bg-gray-100 rounded-r-md items-center justify-center">
              <img
                src="https://restcountries.eu/data/nga.svg"
                alt="flag"
                className="w-6 h-6 rounded-full object-cover mr-2"
              />
              <select className="bg-gray-100 text-purple-900 w-16 font-bold">
                <option value="USD">USD</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
