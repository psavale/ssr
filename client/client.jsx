import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app'
import { handleModifyAnswerUpvotes } from '../shared/utility'

let state = undefined;

fetch("http://localhost:7777/data")
    .then(data => data.json())
    .then(response => {
        state = response;
        console.log("Got the state", response);
        render();
    })

function handleVote(answerId, increment) {
    state.Answers = handleModifyAnswerUpvotes(state.Answers, answerId, increment);
    fetch(`http://localhost:7777/vote/${answerId}?increment=${increment}`);
    console.log('handle vote called');
    render();
}

function render() {
    ReactDOM.hydrate(<App {...state} handleModifyAnswerUpvotes={handleVote} />, document.querySelector("#Container"));
}