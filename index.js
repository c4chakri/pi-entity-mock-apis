require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Proxy route
app.post('/proxy', async (req, res) => {
    try {
        const apiUrl = 'https://ig.gov-cloud.ai/pi-entity-instances-service/v2.0/schemas/68661aea2ec4242da906ee0f/instances/list?page=0&size=50&showDBaaSReservedKeywords=true&showPageableMetaData=true';

        const response = await axios.post(apiUrl, req.body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.BEARER_TOKEN}`
            }
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Proxy Error:', error.message);
        res.status(error.response?.status || 500).json({
            error: error.message,
            details: error.response?.data || {}
        });
    }
});
app.get('/', (req, res) => {
    res.send('Hello, World!');
})
app.listen(PORT, () => {
    console.log(`🚀 Proxy server running on http://localhost:${PORT}`);
});
