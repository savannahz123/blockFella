// use request-promise to request CMC API data
const rp = require('request-promise');

// .env parameters config
require("dotenv").config();

module.exports = function (app) {
    // API /api/scrape
    // Use Coin Market Cap API to scrape the cryptocurrency market data
    app.get("/api/scrape", function (req, res) {
        // Example code from CoinMarketCap API documents
        // Code is subject to change based on follow-up requirement updates
        const requestOptions = {
            method: 'GET',
            uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            qs: {
                'start': '1',
                'limit': '5000',
                'convert': 'USD'
            },
            headers: {
                'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY
            },
            json: true,
            gzip: true
        };

        rp(requestOptions).then(response => {
            res.json(response);
        }).catch((err) => {
            res.send(404);
        });
    })
}