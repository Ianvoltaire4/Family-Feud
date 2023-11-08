import React, { useState, useEffect } from 'react'

const Scorboard = () => {
  return (
    <div>
      <h2>Scorboard</h2>
<div id="Family Fued">
        <div>Time: <span id="timer">30</span></div>
        <div>Round Score: <span id="roundscore">0</span></div>
        <div>Team 1 Score: <span id="team1score">0</span></div>
        <div>Team 2 Score: <span id="team2score">0</span></div>
    </div>
    <div>
      <button id='new question'>Next Question</button>
    </div>


   {finalRoundData.map((round, index) => (
    <div key={index}>
     <h3>{round.question}</h3>
     <div className="rectangle">
      {round.answer.map((answer, answerIndex) => (
       <div className="Container" key={answerIndex}>
        <div className="ListRectangle">{answer}</div>
        <div className="Square”>{score}</div>
       </div>

       

<input type="text" id='answer' placeholder='Type Your Answer' size={40} />


    </div>

    
    // if its right add a score if its right add a point
    // pop up when the game starts

  )
}

export default Scorboard