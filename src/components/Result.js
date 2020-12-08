import React, { useContext } from 'react';
import { InstaCashContext } from '../context/InstaCashContext';
import dayjs from 'dayjs';
import { decimalNumber } from '../helpers/decimalNumber';

export const Result = () => {
    const {
        data: { payment_date: paymentDate, tea, max_quota: maxQuota },
        result,
    } = useContext(InstaCashContext);

    return (
        <div className='result'>
            <p>Tu cuota mensual será:</p>
            <span className='result__pay'>S/ {decimalNumber(result)}</span>
            <div className='result__content'>
                <div className='result__content-quote'>
                    <p>Cuotas</p>
                    <span>{maxQuota}</span>
                </div>
                <div className='result__content-tea'>
                    <p>TEA</p>
                    <span>{decimalNumber(tea)} %</span>
                </div>
                <div className='result__content-pay'>
                    <p>Pago 1 cuota</p>
                    <span>{dayjs(paymentDate).format('DD MMM')}.</span>
                </div>
            </div>
        </div>
    );
};
