import Button from "components/Button/Button";
import React from "react";

interface ErrorPageProps {
  error?: any;
  componentStack?: any;
  resetErrorBoundary?: () => void;
}

export default function ErrorPage({
  error,
  componentStack,
  resetErrorBoundary,
}: ErrorPageProps) {
  return (
    <div className="bg-current-bg min-h-screen">
      <div className="fixed z-50 top-0 flex py-6 px-4 md:px-24 w-full">
        <img src="./logo.png" alt="Logo" />
      </div>
      <div>
        <div className="items-center justify-between flex min-h-screen px-4 md:px-36  w-full">
          <div className="flex w-full justify-between ">
            <div className="max-w-md">
              <h1 className="text-7xl text-gray-400 font-extrabold">500</h1>
              <h2 className="text-purple-900 font-bold text-2xl my-3">
                There’s been a glitch…
              </h2>
              <p className="text-gray-500 text-lg">
                An error has occurred and we’re working to fix the problem!
                We’ll be up and running shortly.
              </p>
              <Button
                onClick={resetErrorBoundary}
                className="bg-current-blue border-current-blue text-white mt-6 h-10 w-48"
              >
                Refresh Page
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
