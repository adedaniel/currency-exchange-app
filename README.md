# Fliqpay Frontend Engineer Assessment Project

### by Adetola Daniel

This project uses React, Context API, Typescript and Tailwind CSS, with Yarn as package manager

## Installation

To install dependencies and run the development server, run:

```bash
yarn
# then
yarn start
```

- You can also view the deployed site on Netlify at [fliqpay-exchange.netlify.app](https://fliqpay-exchange.netlify.app)

- To understand better my thought processes while writing the code, I wrote step-by-step comments on how the code is structured. You can start the tour by looking at the [`src/App.tsx`](https://github.com/adedaniel/fliqpay-exhange-app/blob/master/src/App.tsx) file.

#### Assumptions I made

- I used Nunito sans font because the Sailec font was a paid font

- I used EUR as a fixed recipient currency beacuse the fixer api only converts to EUR as base currency for the free mode

- I assumed that the transfer fees was a fixed amount of 3.69 regardless of the currency

- When in production mode, I noticed that CORS was blocking the api, since fixer only provides an http api for the free plan rather than the https api - so I had to use a fallback json to get rates incase the api fails (you can see it at [`/src/utils/rates.json`](https://github.com/adedaniel/fliqpay-exhange-app/blob/master/src/utils/rates.json))
