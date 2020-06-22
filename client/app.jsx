import React from 'react'

export const App = ({ Questions, Answers, handleModifyAnswerUpvotes }) => {
    return (
        <div>
            <h1>Q&A tool</h1>

            {Questions.map(({ questionId, content }) => (
                <div key={questionId}>
                    <h3>{content}</h3>

                    <div>
                        {Answers.filter(answer => answer.questionId === questionId).map(({ answerId, upvotes, content }) => (
                            <div key={answerId}>
                                <span>{content} -{upvotes} </span>
                                <button onClick={() => handleModifyAnswerUpvotes(answerId, 1)} >+</button>
                                <button onClick={() => handleModifyAnswerUpvotes(answerId, -1)}>-</button>
                            </div>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    );
}