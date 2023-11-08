import React, { useState, useEffect } from "react";
import '../FinalRound.css';
function FinalRound() {
  const [answer, setAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [Uinput, SetUinput] = useState(["", "", "", "", ""]);
  const [currentQuestion, setCurrentQuestion] = useState({ answer: [] }); // Define currentQuestion
  const [list, setList] = useState([]); // Define list with the appropriate data

  useEffect(() => {
    if (score === 200) {
      console.log("Congrats, you have won!");
    } else {
      console.log("You have lost, thanks for playing");
    }
  }, [score]);

  
  const handleSubmitAnswers = () => {
    const newScores = Uinput.map((userInput, index) => {
      const userAnswerValue = Uinput.toLowerCase;
      if (currentQuestion.answer.includes(userAnswerValue)) {
        //what you want to happen
      }
    }
    
    );
    return newScores;
    //update score state
  };

  return (
    <div>
      <h1>Final round question</h1>
      <h3>{currentQuestion.question}</h3>
      <div>
        <div className="rectangle">
          <div className="Container">
            {list.map((e) => (
              <div>
                <div className="ListRectangle">{e.answer}</div>
                <div className="Square">{e.score}</div>
              </div>
            ))}
          </div>
       </div>

          <input
            className="input"
            placeholder="Answer Here!"
            value={Uinput}
            onChange={(e) => SetUinput(e.target.value)}
          />
          <button onClick={handleSubmitAnswers}>Submit Answer</button>
        </div>
      </div>
    </div>
  );
}
export default FinalRound;
