const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const port = 9090;

//support url and json encoded bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get('/articles/', (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.status(200);
    res.json(db.getKeys());
});

app.get('/articles/:name', (req, res) => {
    const name = req.params.name;
    if (name) {
        const article = db.getValue(name);
        if (article) {
            res.status(200);
            res.send(article);
        } else {
            res.sendStatus(404);
        }
    } else {
        res.sendStatus(404);
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