//need to make functions to hide buttons, create logic to end a round when won( if both teams lose from x)

import React, { useState, useEffect } from "react";

const RoundTwo = () => {
  const [teamOneInput, setTeamOneInput] = useState("");
  const [teamTwoInput, setTeamTwoInput] = useState("");
  const [question, setQuestion] = useState("");
  const [answerOne, setAnswerOne] = useState("one");
  const [answerTwo, setAnswerTwo] = useState("two");
  const [answerThree, setAnswerThree] = useState("three");
  const [answerFour, setAnswerFour] = useState("four");
  const [answerFive, setAnswerFive] = useState("five");
  const [answerSix, setAnswerSix] = useState("six");
  const [answerSeven, setAnswerSeven] = useState("seven");
  const [answerOneScore, setAnswerOneScore] = useState("");
  const [answerTwoScore, setAnswerTwoScore] = useState("");
  const [answerThreeScore, setAnswerThreeScore] = useState("");
  const [answerFourScore, setAnswerFourScore] = useState("");
  const [answerFiveScore, setAnswerFiveScore] = useState("");
  const [answerSixScore, setAnswerSixScore] = useState("");
  const [answerSevenScore, setAnswerSevenScore] = useState("");
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
  // let answerOne = "one";
  // let answerTwo = "two";

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

  useEffect(() => {
    if (!showButton) {
      const hideButton = setTimeout(() => {
        setShowButton(false);
      }, 5000);
      return () => clearTimeout(hideButton);
    }
  }, [showButton]);

  const handleStart = () => {
    setTimeout(() => {
      startAndStop();
      setGameStarted(true);
    }, 5000);
    populateData;
  };

  const teamOneWrongAnswer = () => {
    // Compares the teamOneInput with the correct answer (answerOne)
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

  const gameData = [
    {
      q: "Name a food that comes in a box.",
      a1: "cereal",
      a2: "macaroni and cheese",
      a3: "crackers",
      a4: "hamburger helper",
      a5: "donuts",
      a6: "popcorn",
      a7: "pizza",
      s1: 43,
      s2: 14,
      s3: 13,
      s4: 5,
      s5: 5,
      s6: 5,
      s7: 5,
    },
    {
      q: "Name One Of Santa’s Reindeer	",
      a1: "rudolph",
      a2: "donder",
      a3: "blitzen",
      a4: "dancer",
      a5: "vixen",
      a6: "cupid",
      a7: "prancer",
      s1: 52,
      s2: 10,
      s3: 9,
      s4: 8,
      s5: 7,
      s6: 6,
      s7: 5,
    },
    // {
    //   q: '',
    //   a1: '',
    //   a2: '',
    //   a3: '',
    //   a4: '',
    //   a5: '',
    //   a6: '',
    //   a7: '',
    //   s1: ,
    //   s2: ,
    //   s3: ,
    //   s5: ,
    //   s4: ,
    //   s6: ,
    //   s7:
    // } ,
    // {
    //   q: '',
    //   a1: '',
    //   a2: '',
    //   a3: '',
    //   a4: '',
    //   a5: '',
    //   a6: '',
    //   a7: '',
    //   s1: ,
    //   s2: ,
    //   s3: ,
    //   s5: ,
    //   s4: ,
    //   s6: ,
    //   s7:
    // } ,
    // {
    //   q: '',
    //   a1: '',
    //   a2: '',
    //   a3: '',
    //   a4: '',
    //   a5: '',
    //   a6: '',
    //   a7: '',
    //   s1: ,
    //   s2: ,
    //   s3: ,
    //   s5: ,
    //   s4: ,
    //   s6: ,
    //   s7:
    // } ,
    // {
    //   q: '',
    //   a1: '',
    //   a2: '',
    //   a3: '',
    //   a4: '',
    //   a5: '',
    //   a6: '',
    //   a7: '',
    //   s1: ,
    //   s2: ,
    //   s3: ,
    //   s5: ,
    //   s4: ,
    //   s6: ,
    //   s7:
    // } ,
    // {
    //   q: '',
    //   a1: '',
    //   a2: '',
    //   a3: '',
    //   a4: '',
    //   a5: '',
    //   a6: '',
    //   a7: '',
    //   s1: ,
    //   s2: ,
    //   s3: ,
    //   s5: ,
    //   s4: ,
    //   s6: ,
    //   s7:
    // } ,
  ];

  const populateData = () => {
    setQuestion(q);
    setAnswerOne(a1);
    setAnswerTwo(a2);
    setAnswerThree(a3);
    setAnswerFour(a4);
    setAnswerFive(a5);
    setAnswerSix(a6);
    setAnswerSeven(a7);
    setRoundScore(s1 + s2 + s3 + s4 + s5 + s6 + s7);
  };

  const handleCorrectAnswer = () => {
    for (let i = 0; i < gameData.length; i++) {
      const randomIndex = Math.floor(Math.random() * gameData.length);
      const randomObject = gameData[randomIndex];

      return populateData(randomObject);
    }
    console.log(populateData(randomObject));
  };

  const handleRoundOver = () => {
    //logic for if its team ones turn
    if (currentTeam == "Team One") {
      // Compare the teamTwoInput with the correct answer (answerTwo)
      if (
        teamOneInput.toLowerCase() == answerOne &&
        answerTwo &&
        answerThree &&
        answerFour &&
        answerFive &&
        answerSix &&
        answerSeven
      ) {
        console.log("YOU HAVE CLEARED THE BOARD");
      } else if (
        (wrongAnswersTeamOne === maxWrongAnswers &&
          currentTeam == "Team Two" &&
          teamTwoInput.toLowerCase() == answerOne) ||
        answerTwo ||
        answerThree ||
        answerFour ||
        answerFive ||
        answerSix ||
        answerSeven
      ) {
        //if team one is out and the current team is team two and team two get one answer right then team two stole the points
        console.log("TEAM TWO, YOU HAVE STOLEN");
      } else if (
        (wrongAnswersTeamOne === maxWrongAnswers &&
          currentTeam == "Team Two" &&
          teamTwoInput.toLowerCase() !== answerOne) ||
        answerTwo ||
        answerThree ||
        answerFour ||
        answerFive ||
        answerSix ||
        answerSeven
      ) {
        console.log(
          "TEAM TWO HAS LOST THE STEAL, TEAM ONE YOU TAKE THE POINTS"
        );
      } else {
        console.log("NO ONE TAKES THE POINTS");
      }
    } else if (currentTeam == "Team Two") {
      if (
        teamTwoInput.toLowerCase() == answerOne &&
        answerTwo &&
        answerThree &&
        answerFour &&
        answerFive &&
        answerSix &&
        answerSeven
      ) {
        console.log("YOU HAVE CLEARED THE BOARD");
      } else if (
        (wrongAnswersTeamTwo === maxWrongAnswers &&
          currentTeam == "Team One" &&
          teamOneInput.toLowerCase() == answerOne) ||
        answerTwo ||
        answerThree ||
        answerFour ||
        answerFive ||
        answerSix ||
        answerSeven
      ) {
        //if team one is out and the current team is team two and team two get one answer right then team two stole the points
        console.log("TEAM ONE, YOU HAVE STOLEN");
      } else if (
        (wrongAnswersTeamTwo === maxWrongAnswers &&
          currentTeam == "Team One" &&
          teamOneInput.toLowerCase() !== answerOne) ||
        answerTwo ||
        answerThree ||
        answerFour ||
        answerFive ||
        answerSix ||
        answerSeven
      ) {
        console.log(
          "TEAM ONE HAS LOST THE STEAL, TEAM TWO YOU TAKE THE POINTS"
        );
      } else {
        console.log("NO ONE TAKES THE POINTS");
      }
    }
  };
  return (
    <>
      <div id="board">
        <div>{question}</div>
        <div id="answers">
          <div id="answer1" className="allAnswers">
            {answerOne} <strong>{answerOneScore}</strong>
          </div>
          <div id="answer2" className="allAnswers">
            {answerTwo} <strong>{answerTwoScore}</strong>
          </div>
          <div id="answer3" className="allAnswers">
            {answerThree} <strong>{answerThreeScore}</strong>
          </div>
          <div id="answer4" className="allAnswers">
            {answerFour} <strong>{answerFourScore}</strong>
          </div>
          <div id="answer5" className="allAnswers">
            {answerFive} <strong>{answerFiveScore}</strong>
          </div>
          <div id="answer6" className="allAnswers">
            {answerSix} <strong>{answerSixScore}</strong>
          </div>
          <div id="answer7" className="allAnswers">
            {answerSeven} <strong>{answerSevenScore}</strong>
          </div>
        </div>
      </div>

      <h1>{currentTeam} is you turn</h1>
      {(hours === 0 && min === 0 && sec === 0 && millisec === 0) ||
      wrongAnswersTeamOne === maxWrongAnswers ||
      wrongAnswersTeamTwo === maxWrongAnswers ? (
        <div>
          {handleTeamSwitch}

          <h1>DING DING DING DING, TIMES UP</h1>
          <h3>
            On to the next team! {currentTeam} you're up! All you need to do to
            take the points for this round, is guess one more item on the board.
            If its not there then {otherTeam} take this round!!!
          </h3>

          <button id="switch-teams" onClick={handleTeamSwitch}>
            switch
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
