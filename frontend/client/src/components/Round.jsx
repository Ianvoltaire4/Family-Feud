import React, { useState } from 'react';
import './Round.css'
function Round() {
  const [team1Points, setTeam1Points] = useState(0);
  const [team2Points, setTeam2Points] = useState(0);
  const [team1Answer, setTeam1Answer] = useState('');
  const [team2Answer, setTeam2Answer] = useState('');
  const [team1X, setTeam1X]=useState(0)
  const [team2X, setTeam2X]=useState(0)
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
      const score = gameAnswersWithScores[answer.toLowerCase];
      if (score !== undefined) {
        if (team === 1) {
          setTeam1Points(team1Points + score);
          console.log(setTeam1Points(team1Points + score))
        } else if (team === 2) {
          setTeam2Points(team2Points + score);
          console.log(setTeam2Points(team2Points + score))
        }
      }
    }
  };
  const handleInput=()=>{
  }
  return (
    <div>
         <h1 className='header'>Game Question</h1>
      <p>{gameQuestions[0]}</p>
      <p className='teams'>Team 1's total points: {team1Points}</p>
      <p className='teams'>Team 2's total points: {team2Points}</p>
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
export default Round;