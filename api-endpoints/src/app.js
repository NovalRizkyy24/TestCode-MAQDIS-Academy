const express = require('express');
const app = express();
const mainRouter = require('./api/routes/route.js');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API Server is running.",
    info: "Please use the /api prefix to access the endpoints.",
    endpoints: [
        "GET /api/hello",
        "GET /api/setoran",
        "POST /api/data",
        "POST /api/hapus-data"
    ]
  });
});

app.use('/api', mainRouter);

module.exports = app;