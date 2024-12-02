const express = require('express');
const app = express();

app.use((req, res) => {
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name; // 수정된 부분
    res.send(`<h1>Express Server responds as follows: </h1><hr>
    <div><p>User-Agent: ${userAgent}</p></div>
    <div><p>Param Name: ${paramName}</p></div>
    `);
});

app.listen(300, () => {
    console.log('Server is running on port 300');
});
