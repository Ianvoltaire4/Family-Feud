//need to make functions to hide buttons, create logic to end a round when won( if both teams lose from x)

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import CoinFlip from "./CoinFlip"

const RoundTwo = () => {
  //inputs for both teams
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
  const [teamName, setTeamName] = useState("");
  const [otherTeamName, setOtherTeamName] = useState("");
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
  const [showStartMenu, setShowStartMenu] = useState(true);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const maxWrongAnswers = 3;
  let boardCleared = false;
  let content;

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

  const handleTeamName = () => {
    setCurrentTeam(teamName);
  };
  const handleOtherTeamName = () => {
    setOtherTeam(otherTeamName);
  };

  const handleInputChange = (e) => {
    setTeamName(e.target.value);
  };
  const handleOtherInputChange = (e) => {
    setOtherTeamName(e.target.value);
  };

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
    startAndStop;
    setLgShow(true);
  }, [showButton]);

  const handleStart = () => {
    setTimeout(() => {
      startAndStop();
      setGameStarted(true);
      setShowStartMenu(false); // Hide the start menu after starting the game
      setLgShow(false);
      setCurrentTeam(teamName);
      setOtherTeam(otherTeamName);
    }, []);
    populateData;
  };

  const teamOneWrongAnswer = () => {
    // Compares the teamOneInput with the correct answer (answerOne)
    if (teamOneInput.toLowerCase !== answerOne.toLowerCase) {
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
    if (teamTwoInput.toLowerCase !== answerTwo.toLowerCase) {
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
    // }
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
    //populate scores too here mabye
  };

  const assignPoints = () => {
    //make if else statements for giving points based on what answer the user gets right
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
    let boardCleared = false;

    // Check if the answers are correct for the current team
    if (
      (currentTeam === "Team One" &&
        teamOneInput.toLowerCase() === answerOne.toLowerCase() &&
        answerTwo &&
        answerThree &&
        answerFour &&
        answerFive &&
        answerSix &&
        answerSeven) ||
      (currentTeam === "Team Two" &&
        teamTwoInput.toLowerCase() === answerOne.toLowerCase() &&
        answerTwo &&
        answerThree &&
        answerFour &&
        answerFive &&
        answerSix &&
        answerSeven)
    ) {
      console.log("YOU HAVE CLEARED THE BOARD");
      boardCleared = true;
    }

    // Check if the other team stole points
    if (!boardCleared) {
      if (
        (wrongAnswersTeamOne === maxWrongAnswers &&
          currentTeam === "Team Two") ||
        (wrongAnswersTeamTwo === maxWrongAnswers && currentTeam === "Team One")
      ) {
        if (
          (currentTeam === "Team Two" &&
            teamTwoInput.toLowerCase() === answerOne.toLowerCase()) ||
          (currentTeam === "Team One" &&
            teamOneInput.toLowerCase() === answerOne.toLowerCase())
        ) {
          console.log(`${otherTeam}, YOU HAVE STOLEN`);
        } else {
          console.log(
            `${otherTeam} HAS LOST THE STEAL, ${currentTeam} YOU TAKE THE POINTS`
          );
        }
      } else {
        console.log("NO ONE TAKES THE POINTS");
      }
    }
  };

  //for rendering multiple returns
  // const handleTurn=()=>{
  //   if(coinFlip == "heads"){
  //     return(
  //       <>
  
  //       </>
  //     )
  //   }else{
  //     return(
  //       <>
  
  //       </>
  //     )
  //   }
  // }


  return (
    <>
      <Button onClick={() => setLgShow(true)}>START GAME</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            GAME RULES
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isRunning && showButton && (
            <div>
              <div>
                Congrats {currentTeam}, YOUR FIRST! Pick your team name:
                <div>
                  <input
                    type="text"
                    placeholder="ENTER TEAM NAME"
                    value={teamName}
                    onChange={handleInputChange}
                  />
                  <button onClick={handleTeamName}> Save Name</button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="ENTER TEAM NAME"
                    value={otherTeamName}
                    onChange={handleOtherInputChange}
                  />
                  <button onClick={handleOtherTeamName}> Save Name</button>
                </div>
              </div>
              <button id="start" onClick={handleStart}>
                Start Game
                {/* PUT COINFLIP LOGIC HERE */}
              </button>
            </div>
          )}
        </Modal.Body>
      </Modal>

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

      {(hours === 0 && min === 0 && sec === 0 && millisec === 0) ||
      wrongAnswersTeamOne === maxWrongAnswers ||
      wrongAnswersTeamTwo === maxWrongAnswers ? (
        <div>
          <h1>DING DING DING DING, TIMES UP{handleTeamSwitch}</h1>
          <h1>{currentTeam} you have lost you're turn</h1>
          <h3>
            On to the next team! {otherTeam} you're up! All you need to do to
            take the points for this round, is guess one more item on the board.
            If its not there then {currentTeam} take this round!!!
          </h3>

          {/* <button id="switch-teams" onClick={handleTeamSwitch}>
            switch
          </button> */}
        </div>
      ) : (
        <>
          {sec.toString().padStart(2, "0")}:
          {millisec.toString().padStart(2, "0")}
        </>
      )}

      <div>
        {wrongAnswersTeamOne < maxWrongAnswers && (
          <div>
            {currentTeam}: <input id="currentTeam" type="text" onChange={setTeamOneInput} />
            <button onClick={teamOneWrongAnswer}>enter</button>
          </div>
        )}
        {wrongAnswersTeamTwo < maxWrongAnswers && (
          <div>
            {otherTeam}: <input id="otherTeam" type="text" onChange={setTeamTwoInput} />
            <button onClick={teamTwoWrongAnswer}>enter</button>
          </div>
        )}
      </div>
    </>
  );
};

export default RoundTwo;

