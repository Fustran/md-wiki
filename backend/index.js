const express = require('express');
const db = require('./db');
const app = express();
const port = 9090;

//serve the react site
app.use(express.static('./build'));

//support url and json encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/articles/', (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.status(200)
    res.json(db.getKeys());
});

app.get('/articles/:name', (req, res) => {
    const name = req.params.name;
    if (name) {
        res.send(db.getValue(name));
    }
});

app.put('/articles/:name', (req, res) => {
    const name = req.params.name;
    const text = Object.keys(req.body)[0];
    if (name && text) {
        //check if it already exists
        if (db.getValue(name)) {
            res.sendStatus(200);
        } else {
            res.sendStatus(201);
        }
        db.setValue(name, text);
    } else {
        res.sendStatus(404);
    }

});

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
});