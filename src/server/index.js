var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

const cors = require('cors')
app.use(cors());

const bodyParser = require('body-parser')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

console.log(__dirname)

const dotenv = require('dotenv');
dotenv.config();




var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
})

app.post('/analyse', async(req, res) => {
    //validate url is url
    const testUrl = req.body.url;
    console.log(`analysing this: ${testUrl}`);
    textapi.summarize({
        url: testUrl,
        sentences_number: 3
    }, function(error, resp) {
        if (error) {
            console.log('error aylien: ' + error);
            res.status(500).json({
                err: error
            });
        }

        res.status(200).json({
            data: resp.sentences
        });
    });

})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})