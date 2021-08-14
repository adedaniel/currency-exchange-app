# Currency exchange app

This app uses React, Context API, Typescript and Tailwind CSS, with Yarn as package manager

## Installation

To install dependencies and run the development server, run:

```bash
yarn
# then
yarn start
```

- You can also view the deployed site on Netlify at [https://currency-exchange-flow.netlify.app](https://currency-exchange-flow.netlify.app)

- To understand better my thought processes while writing the code, I wrote step-by-step comments on how the code is structured. You can start the tour by looking at the [`src/App.tsx`](https://github.com/adedaniel/fliqpay-exhange-app/blob/master/src/App.tsx) file.

#### Notes

- I assumed that the transfer fees was a fixed amount of 3.69 regardless of the currency

- I created a fallback json to get dummy rates incase the api fails (you can see it at [`/src/utils/rates.json`](https://github.com/adedaniel/fliqpay-exhange-app/blob/master/src/utils/rates.json))
