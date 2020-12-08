import React, { useContext, useEffect, useRef, useState } from 'react';
import { InstaCashContext } from '../context/InstaCashContext';
import NumberFormat from 'react-number-format';
import { numberWithCommas } from '../helpers/formatNumber';

export const Search = () => {
    const {
        data: { min_quota: minQuota, max_quota: maxQuota, max_amount: maxAmount, min_amount: minAmount },
        fetchMonthlyAmount,
    } = useContext(InstaCashContext);
    const [values, setValues] = useState({ amount: '', quote: minQuota });
    const { amount, quote } = values;
    const didMount = useRef(false);

    const handleAmount = ({ floatValue: amount }) => {
        setValues({
            ...values,
            amount,
        });
    };

    const handleRange = (e) => {
        setValues({
            ...values,
            quote: e.target.value,
        });
    };

    useEffect(() => {
        let timeoutId;
        if (didMount.current) {
            timeoutId = setTimeout(() => fetchMonthlyAmount(amount, quote), 1000);
        } else {
            didMount.current = true;
        }
        return () => clearTimeout(timeoutId);
    }, [amount, quote, fetchMonthlyAmount]);

    return (
        <div className='search'>
            <div className='search-group'>
                <label htmlFor='amount'>Ingresa tu monto</label>
                <NumberFormat
                    id='amount'
                    value={amount}
                    onValueChange={handleAmount}
                    thousandSeparator={true}
                    prefix={'S/ '}
                    renderText={(value) => <div>{value}</div>}
                    autoComplete='off'
                />
                <small className='search__amount'>
                    Mínimo {numberWithCommas(minAmount)} - Máximo {numberWithCommas(maxAmount)}
                </small>
            </div>
            <div className='search-group'>
                <label htmlFor='quote'>Elige el número de cuotas</label>
                <input type='range' id='quote' min={minQuota} max={maxQuota} value={quote} onChange={handleRange} />
                <div className='search__quote'>
                    <span className='search__quote-current'>{quote} cuotas</span>
                    <span className='search__quote-max'>Máximo: {maxQuota} </span>
                </div>
            </div>
        </div>
    );
};
