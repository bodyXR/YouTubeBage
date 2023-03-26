import React from "react";
import Question from "./comps/Question";

export default function App() {
  const [quizData, setQuizData] = React.useState([]);
  const [bage, setBage] = React.useState("intro");

  React.useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple&encode=url3986`
      );
      const data = await res.json();
      setQuizData(data.results);
    }
    getData();
  }, []);

  return (
    <div>
      {bage == "intro" ? (
        <div>
          <h1 className="title centerd">Qizzical</h1>
          <p className="para centerd">Get simple small quiz </p>
          <button className="btn" onClick={() => setBage("quiz")}>
            start quiz
          </button>
        </div>
      ) : (
        quizData.map((object) => <Question obj={object} />)
      )}

      {/* <from>
        <input
          name="Email"
          placeholder="Email..."
          value={data.Email}
          onChange={handelChange}
        />
        <br />
        <input
          name="password"
          placeholder="password..."
          value={data.password}
          onChange={handelChange}
        />
        <br />
        <input
          name="passwordConfirm"
          placeholder="password confirm..."
          value={data.passwordConfirm}
          onChange={handelChange}
        />
        <br />
        <input
          type={"checkbox"}
          checked={data.checked}
          onChange={handelChange}
          name="checked"
          id="checked"
        />
        <label htmlFor="checked">get news</label>
        <br />
        {data.validation && <button>submit</button>}
      </from> */}
    </div>
  );
}
