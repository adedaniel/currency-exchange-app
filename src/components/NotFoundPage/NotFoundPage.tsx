import React from "react";
import { useHistory } from "react-router-dom";
import Button from "components/Button/Button";

export default function NotFoundPage() {
  const history = useHistory();

  const goHome = () => {
    let path = `/`;
    history.push(path);
  };

  return (
    <div className="bg-current-bg min-h-screen">
      <div className="fixed z-50 top-0 flex py-6 px-4 md:px-24 w-full">
        <img src="./logo.png" alt="Logo" />
      </div>
      <div>
        <div className="items-center justify-between flex min-h-screen px-4 md:px-36  w-full">
          <div className="flex w-full justify-between ">
            <div className="max-w-md">
              <h1 className="text-7xl text-gray-400 font-extrabold">404</h1>
              <h2 className="text-purple-900 font-bold text-2xl my-3">
                Hmm, we couldn’t find that page.
              </h2>
              <p className="text-gray-500 text-lg">
                No worries - we can still get you where you need to go. Our
                homepage is a good place to start.
              </p>
              <Button
                onClick={goHome}
                className="bg-current-blue border-current-blue text-white mt-6 h-10 w-48"
              >
                Go Home
              </Button>
            </div>
            <div className="hidden md:block">
              <img src="./500-illustration.svg" alt="Error" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
