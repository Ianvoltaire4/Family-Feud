import React from "react";
import "./gamelayoutstyle.css";

const Gamelayout = () => {
  return (
    <>
      <div className="Bigbody">
        <div className="PageBody">
          <div class="PlayerTopBar">
            <div className="Player1">Player 1 Wins</div>
            <div class="Player2">Player 2 Wins</div>
          </div>

          <div className="ScoreBoard">0</div>

          <div className="P1_Xbox">
            <div className="XBox">X</div>
            <div className="XBox">X</div>
            <div className="XBox">X</div>
          </div>

          <div className="P2_Xbox">
            <div className="XBox">X</div>
            <div className="XBox">X</div>
            <div className="XBox">X</div>
          </div>

          <div className="Answer1"></div>
          <div className="Answer2"></div>
          <div className="Answer3"></div>
          <div className="Answer4"></div>
          <div className="Answer5"></div>
          <div className="Answer6"></div>
          <div className="Answer7"></div>
          <div className="Answer8"></div>

          <div className="PlayerBottomBar">
            <div className="WrongAnswer1">Player 1 Wins</div>
            <div className="NextRoundButton">
              {" "}
              <button> GO TO NEXT ROUND </button>
            </div>
            <div className="WrongAnswer2">Player 2 Wins</div>
          </div>

          <div className="PlayerInput1">
            <input type="text" placeholder="Input Team 1" />
          </div>
          <div className="Player1ScoreTab">Team 1</div>
          <div className="Player1Score">
            <input type="text" placeholder="Zero" />
          </div>

          <div className="PlayerInput2">
            <input type="text" placeholder="Input Team 2" />
          </div>
          <div className="Player2ScoreTab">Team 2</div>
          <div className="Player2Score">
            <input type="text" placeholder="Zero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gamelayout;
