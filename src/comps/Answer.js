import React from "react";

export default function Answer(props) {
  const [hold, setHold] = React.useState(false);

  const styles = {
    backgroundColor: hold ? "#D6DBF5" : "#fff",
  };

  function toggle() {
    setHold((prev) => !prev);
    clearAll();
  }
  function clearAll() {
    for (let i = 0; i < 4; i++) {
      document.querySelector(".answers").children[i].style = "#fff";
      // setHold((prev) => (!prev ? true : true));
    }
  }
  // console.log(props.answerArr);
  return (
    <button className="answer" style={styles} onClick={toggle}>
      <p>{String(props.answerArr)}</p>
    </button>
  );
}
