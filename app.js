const express = require('express')
const covid19ImpactEstimator = require('./covidEstimator.js')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs');
const bodyParser = require('body-parser');
var jsonxml = require('jsontoxml');

const port = process.env.PORT || 8007

const app = express();



app.use(morgan('dev'))
app.use(morgan('tiny', {
    stream: fs.createWriteStream(path.join(__dirname, 'logs'))
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.post('/api/v1/on-covid-19', (req, res) => {
    //res.send(req.body);
    res.send(covid19ImpactEstimator(req.body))
});

//'Content-Type': 'text/xml'


app.post('/api/v1/on-covid-19/xml', (req, res) => {
    //res.send(req.body);
    res.header("Content-Type", "text/xml");
    //res.end(firstNPrimes(20).toString());
    res.end(jsonxml(covid19ImpactEstimator(req.body)))
});

app.get('/logs', (req, res) => {
    var readStream = fs.createReadStream('logs', 'utf8')

    // readStream.on('data', function (chunk) {
    //     res.send(chunk)
    // })
    let data = ''

    readStream.on('data', (chunk) => {
        data += (chunk)
        console.log(chunk)
    }).on('end', () => {

        res.status(200).json(data)
    })
})



let input_data = {
    region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
}

//console.log(covid19ImpactEstimator(input_data));


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
