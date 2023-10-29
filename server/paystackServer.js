const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3001'
}));

app.use(bodyParser.json());

const SECRET_KEY = 'sk_test_0c5355f19d26e1daa13624b62951b12ca1a75f35';

app.post('/startTransaction', async (req, res) => {
    const { email, amount } = req.body;

    try {
        const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email: email,
            amount: amount,
            callback_url: "http://localhost:3001/course"  
        }, {
            headers: {
                'Authorization': `Bearer ${SECRET_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const { data } = response.data;
        res.json({ authorizationUrl: data.authorization_url });
    } catch (error) {
        res.status(400).json({ error: 'Transaction failed to initialize' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
