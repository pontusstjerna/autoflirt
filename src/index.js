import express from 'express';
import generateEN from './model_en';
import generateSE from './model_se';
import * as allWordsSE from './words/se';

export const wordsSE = () => {
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
    res.send(generateSE(serious, mean));
});

app.get('/en/', (req, res) => {
   requestsEN++;
   res.send("Not supported yet.");
});

app.get('/meta/', (req, res) => {
   res.send(JSON.stringify({
       requestsEN,
       requestsSE,
       requests: requestsEN + requestsSE
   }));
});

app.listen(port, () => console.log(`Autoflirt API listening at ${port}`));
