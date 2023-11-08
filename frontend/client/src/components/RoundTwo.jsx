//need to make functions to hide buttons, create logic to end a round when won( if both teams lose from x)

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link } from "react-router-dom";
import CoinFlip from "./CoinFlip"
import Flipcoin from "./CoinFlip";



const RoundTwo = () => {
  //inputs for both teams
  const [teamOneInput, setTeamOneInput] = useState("");
  const [teamTwoInput, setTeamTwoInput] = useState("");

  const [question, setQuestion] = useState("Name a food that comes in a box?");
  const [answerOne, setAnswerOne] = useState("pizza");
  const [answerTwo, setAnswerTwo] = useState("macarone and cheese");
  const [answerThree, setAnswerThree] = useState("hamburger");
  const [answerFour, setAnswerFour] = useState("donuts");
  const [answerFive, setAnswerFive] = useState("popcorn");
  const [answerSix, setAnswerSix] = useState("crackers");

  const [answerOneScore, setAnswerOneScore] = useState(30);
  const [answerTwoScore, setAnswerTwoScore] = useState(25);
  const [answerThreeScore, setAnswerThreeScore] = useState(20);
  const [answerFourScore, setAnswerFourScore] = useState(15);
  const [answerFiveScore, setAnswerFiveScore] = useState(10);
  const [answerSixScore, setAnswerSixScore] = useState(5);

  const [currentTeam, setCurrentTeam] = useState("");
  const [otherTeam, setOtherTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [otherTeamName, setOtherTeamName] = useState("");
  const [time, setTime] = useState(300);
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
  //bootstrap
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [show, setShow]=useState(false)
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  const maxWrongAnswers = 5;
  let boardCleared = false;
  let content;

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalId); // Clear the interval to stop the timer
            setShowButton(false); // Hide the button
            setSmShow(true); // Show the modal
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
  const startAndStopOtherTeam = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setShowButton(false);
    }
  };

  const handleTeamSwitch = () => {
    setCurrentTeam(currentTeam === "Team One" ? "Team Two" : "Team One");
    setOtherTeam(otherTeam === "Team Two" ? "Team One" : "Team Two");
  };
  
  // const gameQuestions = [
  //     "Name a food that comes in a box.", 
  //     "what 9 + 10"
  // ]
    

  //   const gameAnsweres = [
  //     "macaroni and cheese",
  //     "crackers",
  //     "hamburger helper",
  //     "donuts",
  //     "popcorn",
  //     "pizza"
  //   ]



  

  // const questionData = [
  //   { answer: "macarone and cheese", score: 10 },
  //   { answer: "crackers", score: 8 },
  //   { answer: "hamburger", score: 6 },
  //   { answer: "donuts", score: 4 },
  //   { answer: "popcorn", score: 2 },
  //   { answer: "pizza", score: 0 },
  // ];
  
  
  // const handleDataPopulation = () => {
  //   if (teamOneInput || teamTwoInput === 'pizza'){
  //     setTeamOneScore(answerOne)
  //   }else if(teamOneInput || teamTwoInput === pizza){

  //   }
  // };




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

  const reset = () => {
    setTime(300);
    startAndStop()
  };
const handleAnwers=()=>{

}
  //FUNCTION I MADE FOR HANDLING THE DATA FOR A WRONG ANSWWER, NEED TO CHANGE AFTER WE CAN POPULATE THE DATA
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

  const [isRound1QuestionActive, setIsRound1QuestionActive] = useState(false)


   
      
  //   if (gameQuestions[0]){
  //   for (let i = 0; i < gameAnsweres.length; i ++){
  //     if (team1Answer === "pizza"){
  //       setteam1Points (team1points + 10)
  //     }
  
  //     if (team1Answer === "crackers"){
  //       setteam1Points (team1points + 36)
  //     }
  //   }
  // }

    
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
  ;


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

  const handleScoreAssignment=()=>{
    if(teamOneInput || teamTwoInput === 'pizza' ){
      
    }
  }


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
       <>
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Fullscreen
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>

    {/* ==================================================== */}
      <Button onClick={() => setLgShow(true)}></Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            GAME RULES: <h6 id="rules">dgoidnvknoeinhjvcgvjhbjnlbhvjgchfvbnknvkjkdfvjklmdfjhnvkldmnjbhfjivnkfbdliv;jlkndfbhlvnlkdfjbvndflkjbhlvndklmcnfjbvhldfnclkmvnjblhdfknkcmlvnjbhdflcnvklm/njbhfdvimknjedfbjkmvnjdfj.nvmkndjf jnkvmndj.fcknmvdfnj vnkmdfnj vnmkdfn v.ndfmk/cv nfndkm vndcm/k df.mcfdnvnkfcvmdfk cmvmfc/ fnmck nckm vfmmdc,mcdm k.fdcmkcilibvcvbnm;nbuiyvutcrytvubnimnubiyvtcvbv</h6>
        {!isRunning && showButton && (
          <div>
            {/* <div>{gameQuestions[0]}</div> */}
            <div>
              <div>
                <input
                  type="text"
                  placeholder="ENTER TEAM NAME"
                  value={teamName}
                  onChange={handleInputChange}
                  />
                <button onClick={handleTeamName}> Save name as heads</button>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="ENTER TEAM NAME"
                  value={otherTeamName}
                  onChange={handleOtherInputChange}
                  />
                <button onClick={handleOtherTeamName}> Save name as tails</button>
              </div>
            </div>
          </div>
        )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Flipcoin />
          <div>
        Heads: {currentTeam}
        <br />
        Tails: {otherTeam}
        </div>
            <button id="start" onClick={handleStart}>
              Start Game

            </button>
        </Modal.Body>
      </Modal>

    {/* ============================================================================================================== */}

    {/* <div>
  <h1>{question}</h1>
  <ul>
    {questionData.map((item, index) => (
      <li key={index}>
        <p>{item.answer}: {item.score}pts</p>
      </li>
    ))}
  </ul>
</div> */}

    {/* ============================================================================================================== */}


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
        </div>
      </div>
{
// time === 0 || 
wrongAnswersTeamOne === maxWrongAnswers || wrongAnswersTeamTwo === maxWrongAnswers ? (
        <>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Small modal
      </Button>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
          <h3>DING DING DING DING, TIMES UP {handleTeamSwitch}, {currentTeam} you have lost you're turn</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>
            On to the next team! {otherTeam} you're up! All you need to do to
            take the points for this round, is guess one more item on the board.
            If its not there then {currentTeam} take this round!!!
          </h3>
          <button >{currentTeam}'s Turn</button>

          {/* <button id="switch-teams" onClick={handleTeamSwitch}>
            switch
          </button> */}
        </Modal.Body>
      </Modal>
        </>

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
            <button onClick={teamTwoWrongAnswer}>Enter</button>
          </div>
        )}
      </div>
    </>
  );
};

export default RoundTwo;

