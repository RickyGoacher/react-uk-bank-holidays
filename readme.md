# UK Bank holidays

A React hook for obtaining UK Bank holidays.

This includes:

- England and Wales.
- Northern Ireland.
- Scotland.

## How to use

### Install

Installation: npm install react-uk-bank-holidays

### Usage

Import the package into your app:

import { useBankHolidays } from "react-uk-bank-holidays";

Hook options:

const {getLoader, getError, getBankHolidays} = useBankHolidays(2022, 2026, 'england-and-wales');

### Params

- from: Start date to grab bank holidays from.
- to: End date to grab bank holidays to.
- loaction: Which set of bank holidays to obtain.

### Location options

- england-and-wales
- scotland
- northern-ireland