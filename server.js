const express = require('express');
const app = express();

// This line allows your API to accept JSON data
app.use(express.json());

app.post('/arjun-echo', (req, res) => {
    res.json({
        status: "success",
        message: "Arjun Echo Cloud Server is Live!",
        yourJSON: req.body
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
