import React, { useState, useEffect } from 'react';

const Scoreboard = () => {
  const finalRoundData = []; // Initialize your data source
  const score = 0; // Initialize the score

  return (
    <div>
      <h2>Scoreboard</h2>
      <div id="FamilyFued">
        <div>
          Time: <span id="timer">30</span>
        </div>
        <div>
          Round Score: <span id="roundscore">0</span>
        </div>
        <div>
          Team 1 Score: <span id="team1score">0</span>
        </div>
        <div>
          Team 2 Score: <span id="team2score">0</span>
        </div>
      </div>
      <div>
        <button id="new-question">Next Question</button>
      </div>
      {finalRoundData.map((round, index) => (
        <div key={index}>
          <h3>{round.question}</h3>
          <div className="rectangle">
            {round.answer.map((answer, answerIndex) => (
              <div className="Container" key={answerIndex}>
                <div className="ListRectangle">{answer}</div>
                <div className="Square">{score}</div>
              </div>
            ))}
            <input type="text" id="answer" placeholder="Type Your Answer" size={40} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Scoreboard;