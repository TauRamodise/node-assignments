//import node modules 
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const fileID = require('./visitorFileID');
let fileData;


// initialize express to the app we are creating 
let app = express();
//Create application
app.use(bodyParser.urlencoded({
    extended: false
}));

//state the path that express will follow to
app.use(express.static('.'));
app.get('/form', (req, res) => {
    res.sendFile('./visitor_.json', __dirname + '/' + './index.html');
})



// post the information from the html form input into a json object that will write the information into a file 
app.post('/formResponse', (req, res) => {
    let array = [];
    let patientID = new fileID(req.body.full_name)
    console.log(patientID.get_name());

    //Prepare output in JSON format
    response = {
        full_name: req.body.full_name,
        visit_date: req.body.visit_date,
        visit_time: req.body.visit_time,
        comments: req.body.comments,
        assisted_by: req.body.assisted_by,

    }
    for (let i in response) {
        array.push(response[i]);
    }
    array.push(response)

    fileData = JSON.stringify(array)
    console.log(fileData);
    res.end(fileData);

    fs.writeFile(`${patientID.get_name()}.json`, fileData, err => {
        if (err) {
            throw (Error + 'Cannot save file');
        } else {
            console.log('File was saved');
        }
    });

})

//  server that hosts the site 
let server = app.listen(3001, () => {
    let host = "http://127.0.0.1:3001"

    console.log('Appointment log listening at http://%s:%s', host);
})