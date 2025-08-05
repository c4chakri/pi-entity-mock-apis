require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
// const PORT = process.env.PORT || 3000;
const PORT=8008
const BEARER_TOKEN="eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3Ny1NUVdFRTNHZE5adGlsWU5IYmpsa2dVSkpaWUJWVmN1UmFZdHl5ejFjIn0.eyJleHAiOjE3NTQ0MDgwMjUsImlhdCI6MTc1NDM3MjAyNSwianRpIjoiNDQ0ZDQwNGItODYyNC00MTkwLTljZGQtZjJlNDNlMGY1NzU3IiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLXNlcnZpY2Uua2V5Y2xvYWsuc3ZjLmNsdXN0ZXIubG9jYWw6ODA4MC9yZWFsbXMvbWFzdGVyIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhNzc4OTZmLTdjMWYtNDUwMS1iNGY2LTU0N2E3ZDI2ZGRlNiIsInR5cCI6IkJlYXJlciIsImF6cCI6IkhPTEFDUkFDWV9tb2JpdXMiLCJzaWQiOiI4OTEyNDNmNi0zNDA5LTQzYzAtYjAwMS05MGM5N2E0ZDRmNGYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIi8qIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJkZWZhdWx0LXJvbGVzLW1hc3RlciIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJIT0xBQ1JBQ1lfbW9iaXVzIjp7InJvbGVzIjpbIkhPTEFDUkFDWV9VU0VSIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJyZXF1ZXN0ZXJUeXBlIjoiVEVOQU5UIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJ4cHggeHB4IiwidGVuYW50SWQiOiJiYTc3ODk2Zi03YzFmLTQ1MDEtYjRmNi01NDdhN2QyNmRkZTYiLCJwbGF0Zm9ybUlkIjoibW9iaXVzIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicGFzc3dvcmRfdGVuYW50X3hweEBnYWlhbnNvbHV0aW9ucy5jb20iLCJnaXZlbl9uYW1lIjoieHB4IiwiZmFtaWx5X25hbWUiOiJ4cHgiLCJlbWFpbCI6InBhc3N3b3JkX3RlbmFudF94cHhAZ2FpYW5zb2x1dGlvbnMuY29tIn0.c-e7gvP8cb2HG5xgDz3SXIdXXwD9kKU61eMNGObB8cPBYXUNlwTPVTpdYCWEEzaJops6x7zJ25LLt6UG8TrIi3f0V0FzLRypO98jUbnqKA9xts08d6J6LCn-SRCiGAtUrrDhH_2o2E1laJWNqLjXfIyATc4y3EK_Oe2cYw0k5pYTEXgo00zS3DC5hcabPpFKpv-VxrrSViNAKIcjGzJLo6p6NXgtRdey0ZQ8kjdM3KidkoErcwvS2_nAaiYGG9GmHE5bHNckjJxfRDfIMCQM0GrBSEOZKgx1sMMkZfr8HK79cJg839WS4W-aj1OOjCPxgUXO_TAUWw7rxzNPgO1UVg"

app.use(express.json());

// Proxy route
app.post('/tokens', async (req, res) => {
    try {
        console.log("Getting tokens data..... from proxy");
        
        const apiUrl = 'https://ig.gov-cloud.ai/pi-entity-instances-service/v2.0/schemas/685e7a342ec4242da906daca/instances/list?page=0&size=50&showDBaaSReservedKeywords=true&showPageableMetaData=true';

        const response = await axios.post(apiUrl, req.body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${BEARER_TOKEN}`
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

app.post('/proxy', async (req, res) => {
    try {
        console.log("Getting proxy data..... from proxy");
        
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

app.post('/investors', async (req, res) => {
    try {
        console.log("Getting investors data..... from proxy");
        
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
