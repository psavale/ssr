
export function handleModifyAnswerUpvotes(Answers, answerId, increment) {
    return Answers.map(answer => {
        if (answer.answerId != answerId)
            return answer;
        else {
            return { ...answer, upvotes: answer.upvotes + increment }
        }
    })
}