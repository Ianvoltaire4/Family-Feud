import React, { useState } from 'react';
import '../TestGame.css'

function YourComponent() {
  const [team1Points, setTeam1Points] = useState(0);
  const [team2Points, setTeam2Points] = useState(0);
  const [team1Answer, setTeam1Answer] = useState('');
  const [team2Answer, setTeam2Answer] = useState('');
  const [displayState, setDisplayState] = useState(0);
  const maxGuess = 5;
  const teams = [1, 2];
  const currentTeam = teams[displayState % 2]; // Switch between teams 1 and 2

  const gameQuestions = ["Name a food that comes in a box"];
  const gameAnswersWithScores = {
    "macaroni and cheese": 20,
    "crackers": 15,
    "hamburger helper": 10,
    "donuts": 25,
    "popcorn": 30,
    "pizza": 10,
  };

  const handleAnswer = (answer) => {
    if (gameQuestions.length > 0) {
      const score = gameAnswersWithScores[answer.toLowerCase()];
      if (score !== undefined) {
        if (currentTeam === 1) {
          setTeam1Points(team1Points + score);
        } else if (currentTeam === 2) {
          setTeam2Points(team2Points + score);
        }

        // how to find and remove an item from an object

        




      }
    }
    setDisplayState(displayState + 1); // Advance the displayState
    if (displayState === maxGuess * 2) {
      // Reset displayState after both teams have finished their guesses
      setDisplayState(0);
    }


  };

  return (
    <div>
      <h1>Game Question</h1>
      <p>{gameQuestions[0]}</p>
      <p>Team 1's total points: {team1Points}</p>
      <p>Team 2's total points: {team2Points}</p>
      {currentTeam === 1 ? (
        <div>
          <input
            type="text"
            placeholder="Team 1's Answer"
            value={team1Answer}
            onChange={(e) => setTeam1Answer(e.target.value)}
          />
          <button onClick={() => handleAnswer(team1Answer)}>Submit Team 1's Answer</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Team 2's Answer"
            value={team2Answer}
            onChange={(e) => setTeam2Answer(e.target.value)}
          />
          <button onClick={() => handleAnswer(team2Answer)}>Submit Team 2's Answer</button>
        </div>
      )}
    </div>
  );
}

export default YourComponent;
