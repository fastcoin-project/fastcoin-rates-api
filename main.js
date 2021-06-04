const express = require('express')
const axios = require('axios')
const parser = require('xml2json')
const cors = require('cors')
const helmet = require('helmet')
const _ = require('lodash')
const https = require('https')
const fs = require('fs')
const ticker = require('./ticker.json')

const app = express()
const port = process.env.port || 4001
app.use(cors())
app.use(helmet())

let rateArray = [] // computed

setInterval(() => {
    // updates ECB fiat rates
    getFiatRates = new Promise((resolve, reject) => {
        axios.get('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml')
            .then(data => data.data)
            .then(xml => parser.toJson(xml, { object: true }))
            .then(json => {
                let fiatRates = json['gesmes:Envelope'].Cube.Cube.Cube
                resolve(fiatRates)
            })
            .catch(err => reject(err))
    })

    // updates fastcoin rates
    getFastcoinRates = new Promise((resolve, reject) => {
        axios.get('https://fastcoinwallet.com/rates/price.json')
            .then(data => data.data.data)
            .then(price => price[1])
            .then(rate => {
                let usdRate = parseFloat(rate.rate)
                resolve(usdRate)
            })
            .catch(err => reject(err))
    })

    // builds response
    Promise.all([getFiatRates, getFastcoinRates])
        .then(values => {
            rateArray.length = 0 // erase array

            let fiatRates = values[0]
            let usdRate = values[1]
            let eurRate = (usdRate / _.find(fiatRates, {'currency' : 'USD'}).rate)

            rateArray.push({
              code: "EUR",
              price: ${ticker["EUR"].symbol}${eurRate.toFixed(2)},
              n: parseFloat(eurRate.toFixed(2)),
              name: "Euro"
            });

            _.forEach(fiatRates, o => {
                const price =  eurRate * o.rate
                const fiat = ticker[o.currency]
                const name = fiat.name
          let priceTo2Dec = parseFloat(price.toFixed(2))
                let priceWithSymbol = ${fiat.symbol}${price.toFixed(2)}

                let object = { code: o.currency, price: priceWithSymbol, n: priceTo2Dec, name}
                rateArray.push(object)
            })
        })
}, 60 * 1000)

// letsencrypt verification
app.use(express.static(__dirname, { dotfiles: 'allow' }))

app.get('/api/rates', (req, res) => {
    res.json(rateArray)
})

app.get('/api/fee_per_kb', (req, res) => {
    const fees = {
      fee_per_kb: 50000,
      fee_per_kb_economy: 10000
    };
    res.json(fees)
})

// http server
app.listen(port, () => {
    console.log(`fastoin-rates-api launched on port ${port}`)
})
