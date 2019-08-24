import express from 'express';
import generateEN from './model_en';
import generateSE from './model_se';
import * as allWordsSE from './words/se';
import { connectDb } from './words';
import { config } from 'dotenv';

config();

const wordsSE = () => {
    return Object.keys(allWordsSE)
        .map(wordType => allWordsSE[wordType])
        .map(words => words.serious.length + words.mean.length + words.weird.length)
        .reduce((prev, curr) => prev * curr);
};

const app = express();
const port = 3001;
let requestsSE = 0;
let requestsEN = 0;

app.get('/se/', (req, res) => {
    requestsSE++;
    let serious = req.query.serious !== "false";
    let mean = req.query.mean === "true";
    generateSE(serious, mean).then(line => res.send(line));
});

app.get('/se/count', (req, res) => res.send(wordsSE()));

app.get('/en/', (req, res) => {
   requestsEN++;
   res.send(generateEN());
});

app.get('/meta/', (req, res) => {
   res.send(JSON.stringify({
       requestsEN,
       requestsSE,
       requests: requestsEN + requestsSE
   }));
});

connectDb().then(() => app.listen(port, () => console.log(`Autoflirt API listening at ${port}`)));
