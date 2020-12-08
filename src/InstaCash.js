import React, { useEffect, useState } from 'react';
import { Search } from './components/Search';
import { Loader } from './components/Loader';
import { Result } from './components/Result';
import { InstaCashContext } from './context/InstaCashContext';

export const InstaCash = () => {
    const [amount, setAmount] = useState(0);
    const [data, setData] = useState({});
    const [loader, setLoader] = useState(true);
    const [result, setResult] = useState(0);

    useEffect(() => {
        setLoader(true);
        fetch('/api/init_data')
            .then((res) => res.json())
            .then((json) => {
                setData(json.data);
                setLoader(false);
            })
            .catch((error) => setLoader(false));
    }, []);

    const fetchMonthlyAmount = async (floatValue, quote) => {
        try {
            const body = { floatValue, quote };
            console.log(body);
            const response = await fetch('/api/monthyAmount', { method: 'POST', body: JSON.stringify(body) });
            const { monthly_amount } = await response.json();
            setResult(monthly_amount);
        } catch (error) {}
    };

    return (
        <InstaCashContext.Provider value={{ amount, setAmount, data, setData, fetchMonthlyAmount, result }}>
            {!loader ? (
                <div className='instaCash'>
                    <h2 className='instaCash__title'>Simula tu cuota</h2>
                    <Result />
                    <Search />
                </div>
            ) : (
                <Loader />
            )}
        </InstaCashContext.Provider>
    );
};
