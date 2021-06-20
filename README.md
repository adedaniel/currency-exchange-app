# Fliqpay Frontend Engineer Assessment Project

### by Adetola Daniel

This project uses React, Tpyescript and Tailwind CSS with Yarn as package manager

## Installation

To install dependencies and run the development server, run:

```bash
yarn
# then
yarn start
```

- You can also view the deployed site at [fliqpay-exchange.netlify.app](https://fliqpay-exchange.netlify.app)

### Important

- I used Nunito sans fonr because Sailec font wasnt free
- The fixer api only converts to eur as base currency for the free mode
- I assumed that the transfer fees was a fixed amount of 3.69 regardless of the currency
- i had to use a cors provider since fixer only gives provides an http api for the free plan rather than the https api
