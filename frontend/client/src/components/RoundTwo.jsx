// import React, { useState, useEffect } from "react";

// const RoundTwo = () => {
//   const [teamOneScore, setTeamOneScore] = useState(0);
//   const [teamTwoScore, setTeamTwoScore] = useState(0);
//   const [teamOneInput, setTeamOneInput] = useState("");
//   const [teamTwoInput, setTeamTwoInput] = useState("");
//   const [roundScore, setRoundScore] = useState(0);
//   const [question, setQuestion] = useState("");
//   const [answerThree, setAnswerThree] = useState("");
//   const [answerFour, setAnswerFour] = useState("");
//   const [answerFive, setAnswerFive] = useState("");
//   const [answerSix, setAnswerSix] = useState("");
//   const [answerSeven, setAnswerSeven] = useState("");
//   const [answerEight, setAnswerEight] = useState("");
//   const [teamOneX, setTeamOneX] = useState(0);
//   const [teamTwoX, setTeamTwoX] = useState(0);
//   const [time, setTime] = useState(1000);
//   const [isRunning, setIsRunning] = useState(false);
//   const [showButton, setShowButton] = useState(true);
//   const [wrongAnswersTeamOne, setWrongAnswersTeamOne] = useState(0);
//   const [wrongAnswersTeamTwo, setWrongAnswersTeamTwo] = useState(0);
//   const [currentTeam, setCurrentTeam] = useState("teamOne"); // Initialize with Team One

  
//   const answerOne = 'one';
//   const answerTwo = 'two';
//   const maxWrongAnswers = 3;

//   useEffect(() => {
//     let intervalId;
//     if (isRunning) {
//       intervalId = setInterval(() => {
//         setTime((prevTime) => {
//           if (prevTime === 0) {
//             setIsRunning(false);
//             setShowButton(false);
//             return 0;
//           }
//           return prevTime - 1;
//         });
//       }, 10);
//     }
//     return () => clearInterval(intervalId);
//   }, [isRunning]);

//   const hours = Math.floor(time / 360000);
//   const min = Math.floor((time % 360000) / 6000);
//   const sec = Math.floor((time % 6000) / 100);
//   const millisec = time % 100;

//   const startAndStop = () => {
//     setIsRunning(!isRunning);
//     if (!isRunning) {
//       setShowButton(false);
//     }
//   };

//   const reset = () => {
//     setIsRunning(false);
//     setShowButton(false);
//     setTime(0);
//   };

//   const handleStart = () => {
//     startAndStop();
//   };

//   const handleWrongAnswer = () => {
//     const correctAnswer =
//       currentTeam === "teamOne" ? answerOne : answerTwo;
//     const currentWrongAnswers =
//       currentTeam === "teamOne" ? wrongAnswersTeamOne : wrongAnswersTeamTwo;

//     if (currentTeam === "teamOne") {
//       if (teamOneInput.toLowerCase() !== correctAnswer.toLowerCase()) {
//         setTeamOneX((prevScore) => prevScore + 1);
//       }
//       setWrongAnswersTeamOne(currentWrongAnswers + 1);
//     } else {
//       if (teamTwoInput.toLowerCase() !== correctAnswer.toLowerCase()) {
//         setTeamTwoX((prevScore) => prevScore + 1);
//       }
//       setWrongAnswersTeamTwo(currentWrongAnswers + 1);
//     }

//     if (currentWrongAnswers >= maxWrongAnswers) {
//       setCurrentTeam(currentTeam === "teamOne" ? "teamTwo" : "teamOne");
//     }
//   };
//   useEffect(() => {
//     if (!showButton) {
//       const hideButtonTimeout = setTimeout(() => {
//         setShowButton(false);
//       }, 5000);
//       return () => clearTimeout(hideButtonTimeout);
//     }
//   }, [showButton]);

//   return (
//     <>
//       {hours === 0 && min === 0 && sec === 0 && millisec === 0 ? (
//         <button id="reset" onClick={reset}>
//           Reset Time
//         </button>
//       ) : (
//         <>
//           {hours}:{min.toString().padStart(2, "0")}:
//           {sec.toString().padStart(2, "0")}:
//           {millisec.toString().padStart(2, "0")}
//         </>
//       )}
//       {!isRunning && showButton && (
//         <button id="start" onClick={handleStart}>
//           Start Game
//         </button>
//       )}

// <div>
//         {currentTeam === "teamOne" && wrongAnswersTeamOne < maxWrongAnswers && (
//           <div>
//             Team One Answer:{" "}
//             <input
//               type="text"
//               value={teamOneInput}
//               onChange={(e) => setTeamOneInput(e.target.value)}
//             />
//             <button onClick={handleWrongAnswer}>Submit Answer</button>
//           </div>
//         )}
//         {currentTeam === "teamTwo" && wrongAnswersTeamTwo < maxWrongAnswers && (
//           <div>
//             Team Two Answer:{" "}
//             <input
//               type="text"
//               value={teamTwoInput}
//               onChange={(e) => setTeamTwoInput(e.target.value)}
//             />
//             <button onClick={handleWrongAnswerTeamTwo}>Submit Answer</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default RoundTwo;




import React, { useState, useEffect } from "react";

const RoundTwo = () => {
  const [teamOneScore, setTeamOneScore] = useState(0);
  const [teamTwoScore, setTeamTwoScore] = useState(0);
  const [teamOneInput, setTeamOneInput] = useState('');
  const [teamTwoInput, setTeamTwoInput] = useState('');

  const [roundScore, setRoundScore] = useState(0);
  const [question, setQuestion] = useState("");
//   const [answerOne, setAnswerOne] = useState("");
//   const [answerTwo, setAnswerTwo] = useState("");
let answerOne='one'
let answerTwo='two'
const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");
  const [answerFive, setAnswerFive] = useState("");
  const [answerSix, setAnswerSix] = useState("");
  const [answerSeven, setAnswerSeven] = useState("");
  const [answerEight, setAnswerEight] = useState("");
  const [teamOneX, setTeamOneX] = useState(0);
  const [teamTwoX, setTeamTwoX] = useState(0);
  const [time, setTime] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [wrongAnswersTeamOne, setWrongAnswersTeamOne] = useState(0);
  const [wrongAnswersTeamTwo, setWrongAnswersTeamTwo] = useState(0);
  const [currentTeam, setCurrentTeam]=useState('')

  const maxWrongAnswers = 3; // Define the maximum number of wrong answers allowed

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setIsRunning(false); // Stop the timer when time reaches 0
            setShowButton(false); // Hide the button
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
    setCurrentTeam(currentTeam === 'Team One' ? 'Team Two' : 'Team One');
  };

  const handleStart = () => {
    startAndStop();
  };

  const handleWrongAnswerTeamOne = () => {
    // Compare the teamOneInput with the correct answer (answerOne)
    if (teamOneInput.toLowerCase() !== answerOne.toLowerCase()) {
       // if timer is zero then swtich team
      // Increment the score for Team One
      setTeamOneX(teamTwoX + 1);
    }
    
    setWrongAnswersTeamOne(wrongAnswersTeamOne + 1);
    if (wrongAnswersTeamOne >= maxWrongAnswers) {
        // Hide the input fields for Team One
        // You can set state variables to hide or show the input fields
    }
};
const handleWrongAnswerTeamTwo = () => {
  // Compare the teamTwoInput with the correct answer (answerTwo)
  if (teamTwoInput.toLowerCase() !== answerTwo.toLowerCase()) {
    // Increment the score for Team Two
    setTeamTwoX(teamTwoX + 1);
  }
  
    setWrongAnswersTeamTwo(wrongAnswersTeamTwo + 1);
    if (wrongAnswersTeamTwo >= maxWrongAnswers) {
      // Hide the input fields for Team Two
      // You can set state variables to hide or show the input fields
    }
  };
  useEffect(() => {
    if (!showButton) {
      const hideButtonTimeout = setTimeout(() => {
        setShowButton(false);
      }, 5000);
      return () => clearTimeout(hideButtonTimeout);
    }
  }, [showButton]);

  return (
    <>
      {hours === 0 && min === 0 && sec === 0 && millisec === 0 ? (
          <button id="switch-teams" onClick={handleTeamSwitch}>

            <h1>times up, ding ding ding ding</h1>
          Switch  {console.log(currentTeam)}
        </button>
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

      {/* Example for hiding input fields based on the number of wrong answers */}
      <div>
        {wrongAnswersTeamOne < maxWrongAnswers && (
          <div>
            Team One Answer: <input type="text" /><button onClick={handleWrongAnswerTeamOne}></button>
          </div>
        )}
        {wrongAnswersTeamTwo < maxWrongAnswers && (
          <div>
            Team Two Answer: <input type="text" /><button onClick={handleWrongAnswerTeamTwo}></button>
          </div>
        )}
      </div>
    </>
  );
};

export default RoundTwo;
