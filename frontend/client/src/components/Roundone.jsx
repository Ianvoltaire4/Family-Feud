import React from 'react'
import Questions from './Questions';

const Roundone = () => {
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

  return (
    <div>
      Scorebord
      
      <Questions />
    </div>
  )
}

export default Roundone