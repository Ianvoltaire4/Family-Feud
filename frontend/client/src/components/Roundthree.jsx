import React, { useState } from 'react';
import './Round.css'

function Roundthree() {
  const [team1Points, setTeam1Points] = useState(0);
  const [team2Points, setTeam2Points] = useState(0);
  const [team1Answer, setTeam1Answer] = useState('');
  const [team2Answer, setTeam2Answer] = useState('');
  const gameQuestions = ["Name a food that comes in a box"];
  const gameAnswersWithScores = {
    "macaroni and cheese": 20,
    "crackers": 15,
    "hamburger helper": 10,
    "donuts": 25,
    "popcorn": 30,
    "pizza": 10,
  };
  const handleAnswer = (answer, team) => {
    if (gameQuestions.length > 0) {
      const score = gameAnswersWithScores[answer.toLowerCase()];
      if (score !== undefined) {
        if (team === 1) {
          setTeam1Points(team1Points + score);
        } else if (team === 2) {
          setTeam2Points(team2Points + score);
        }
      }
    }
  };
  return (
    <div className='gamepage'>
         <h1 className='header'>Game Question</h1>
      <p>{gameQuestions[0]}</p>
      <p>Team 1's total points: {team1Points}</p>
      <p>Team 2's total points: {team2Points}</p>
      <input
        type="text"
        placeholder="Team 1's Answer"
        value={team1Answer}
        onChange={(e) => setTeam1Answer(e.target.value)}
      />
      <button onClick={() => handleAnswer(team1Answer, 1)}>Submit Team 1's Answer</button>
      <input
        type="text"
        placeholder="Team 2's Answer"
        value={team2Answer}
        onChange={(e) => setTeam2Answer(e.target.value)}
      />
      <button onClick={() => handleAnswer(team2Answer, 2)}>Submit Team 2's Answer</button>
    </div>
  );
}

export default Roundthree;