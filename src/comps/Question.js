import React from "react";
import Answer from "./Answer";

export default function Question(props) {
  let answers = [];
  let answersList = [];

  React.useEffect(() => {
    answers = props.obj.incorrect_answers;
    answers.push(props.obj.correct_answer);
    answers.sort();
    localStorage.setItem(`answersList`, JSON.stringify(answers));
    // console.log(answers);

    // answersList = genAnswer(answers);
  }, []);

  console.log(JSON.parse(localStorage.getItem("answersList")));
  answersList = JSON.parse(localStorage.getItem("answersList")).map(
    (answer) => <Answer answerArr={answer} />
  );

  return (
    <div className="question">
      <p className="para">{props.obj.question.replace("%20", "")}</p>

      <div className="answers">{answersList}</div>
    </div>
  );
}
