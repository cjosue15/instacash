import { createServer } from 'miragejs';

export const server = () => {
    return createServer({
        routes() {
            this.get('/api/init_data', () => ({
                data: {
                    campaign_name: 'InstaCash',
                    min_quota: 1,
                    max_quota: 48,
                    max_amount: 19600,
                    min_amount: 1500,
                    tea: 26.5612,
                    payment_date: '2019-12-26T16:30:04.591Z',
                    currency: 'PEN',
                },
            }));

            this.post('/api/monthyAmount', (schema, request) => {
                const data = JSON.parse(request.requestBody);
                console.log(data);

                return { monthly_amount: 382.5912 };
            });
        },
    });
};
