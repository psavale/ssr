import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import { readFileSync } from 'fs';
import { App } from '../client/app'
import { data } from './database'
import { handleModifyAnswerUpvotes } from '../shared/utility'

const app = new express();
app.use(express.static("dist"));

app.get('/data', async (_req, res) => {
    res.json(data);
});

app.get('/vote/:answerId', (_req, res) => {
    const { query, params } = _req;
    data.Answers = handleModifyAnswerUpvotes(data.Answers, params.answerId, parseInt(query.increment));
    res.send("OK");
});

app.get('/', async (_req, res) => {
    const index = readFileSync('public/index.html', 'utf8');
    const rendered = renderToString(<App {...data} />);
    res.send(index.replace("{{rendered}}", rendered));
});

app.listen(7777);
console.log('server is listening at port 7777');