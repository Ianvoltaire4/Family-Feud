//need to make functions to hide buttons, create logic to end a round when won(if one wins by steal, if one wins by clearing board, if one wins by losing the steal, if both teams lose from x), ,

import React, { useState, useEffect } from "react";

const RoundTwo = () => {
  const [teamOneInput, setTeamOneInput] = useState("");
  const [teamTwoInput, setTeamTwoInput] = useState("");
  const [question, setQuestion] = useState("");
  //   const [answerOne, setAnswerOne] = useState('');
  //   const [answerTwo, setAnswerTwo] = useState('');
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");
  const [answerFive, setAnswerFive] = useState("");
  const [answerSix, setAnswerSix] = useState("");
  const [answerSeven, setAnswerSeven] = useState("");
  const [currentTeam, setCurrentTeam] = useState("");
  const [otherTeam, setOtherTeam] = useState("");
  const [time, setTime] = useState(1000);
  const [teamOneX, setTeamOneX] = useState(0);
  const [teamTwoX, setTeamTwoX] = useState(0);
  const [teamOneScore, setTeamOneScore] = useState(0);
  const [teamTwoScore, setTeamTwoScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [wrongAnswersTeamOne, setWrongAnswersTeamOne] = useState(0);
  const [wrongAnswersTeamTwo, setWrongAnswersTeamTwo] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  let answerOne = "one";
  let answerTwo = "two";

  const maxWrongAnswers = 3;

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setIsRunning(false); // stopping the timer when time reaches 0
            setShowButton(false); // hiding the button
            return 0;
          }
          return prevTime - 1;
        });
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const hours = Math.floor(time / 360000);
  const min = Math.floor((time % 360000) / 6000);
  const sec = Math.floor((time % 6000) / 100);
  const millisec = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setShowButton(false);
    }
  };

  const handleTeamSwitch = () => {
    setCurrentTeam(currentTeam === "Team One" ? "Team Two" : "Team One");
    setOtherTeam(otherTeam === "Team Two" ? "Team One" : "Team Two");
  };

  const populateData = () => {
    //write the function to populate the data in the div
  };

  const handleStart = () => {
    setTimeout(() => {
      startAndStop();
      setGameStarted(true);
    }, 5000);
    populateData;
  };

  const teamOneWrongAnswer = () => {
    // Compare the teamOneInput with the correct answer (answerOne)
    if (teamOneInput.toLowerCase() !== answerOne.toLowerCase()) {
      // if timer is zero then swtich team
      // Increment the score for Team One
      setTeamOneX(teamOneX + 1);
    }

    setWrongAnswersTeamOne(wrongAnswersTeamOne + 1);
    if (wrongAnswersTeamOne >= maxWrongAnswers) {
      // hide the button for team two function here
    }
  };
  const teamTwoWrongAnswer = () => {
    // Compare the teamTwoInput with the correct answer (answerTwo)
    if (teamTwoInput.toLowerCase() !== answerTwo.toLowerCase()) {
      // Increment the score for Team Two
      setTeamTwoX(teamTwoX + 1);
    }

    setWrongAnswersTeamTwo(wrongAnswersTeamTwo + 1);
    if (wrongAnswersTeamTwo >= maxWrongAnswers) {
      // hide the button for team two function here
    }
  };
  useEffect(() => {
    if (!showButton) {
      const hideButton = setTimeout(() => {
        setShowButton(false);
      }, 5000);
      return () => clearTimeout(hideButton);
    }
  }, [showButton]);

  return (
    <>
      {(hours === 0 && min === 0 && sec === 0 && millisec === 0) ||
      wrongAnswersTeamOne === maxWrongAnswers ||
      wrongAnswersTeamTwo ? (
        <div>
          {handleTeamSwitch}
          <h1>DING DING DING DING, TIMES UP</h1>
          <h3>
            On to the next team! {currentTeam} you're up! All you need to do to
            take the points for this round, is guess one more item on the board.
            If its not there then {otherTeam} take this round!!!
          </h3>

          <button id="switch-teams" onClick={handleTeamSwitch}>
            Switch {console.log(`${currentTeam} its your turn`)}
            {console.log(`${otherTeam} your up next`)}
          </button>
        </div>
      ) : (
        <>
          {sec.toString().padStart(2, "0")}:
          {millisec.toString().padStart(2, "0")}
        </>
      )}
      {!isRunning && showButton && (
        <button id="start" onClick={handleStart}>
          Start Game
        </button>
      )}

      <div>
        {wrongAnswersTeamOne < maxWrongAnswers && (
          <div>
            Team One Answer: <input type="text" />
            <button onClick={teamOneWrongAnswer}></button>
          </div>
        )}
        {wrongAnswersTeamTwo < maxWrongAnswers && (
          <div>
            Team Two Answer: <input type="text" />
            <button onClick={teamTwoWrongAnswer}></button>
          </div>
        )}
      </div>
    </>
  );
};

export default RoundTwo;
