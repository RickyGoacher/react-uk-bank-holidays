import { useState, useEffect } from "react";

interface BankHolidayDataInterface {
    title: string;
    date: string;
    notes: string;
    bunting: string;
}

export const useBankHolidays = (from:number, to:number, location:string) => {

    const [getLoader, setLoader] = useState(false);
    const [getError, setError] = useState('');
    const [getBankHolidays, setBankHolidays] = useState([]);

    useEffect(() => {

        const FetchBankHolidays = async () => {
            try {
                setLoader(true);
                const response = await fetch(`https://www.gov.uk/bank-holidays.json`);
                const data = await response.json();
                const FilterData = data[location].events.filter((item:BankHolidayDataInterface) => {
                    return Number(item.date.substr(0,4)) > from && Number(item.date.substr(0,4)) <= to;
                });
                setBankHolidays(FilterData);
            } catch(error) {
                console.error(error);
                setError('Unable to retrieve data.');
            } finally {
                setLoader(false);
            }
        }

        FetchBankHolidays();

    }, [from, to, location]);

    return {
        getLoader,
        getError,
        getBankHolidays
    }
}