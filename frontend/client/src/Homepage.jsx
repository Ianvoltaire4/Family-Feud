import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import RoundTwo from './components/RoundTwo';


const Homepage = () => {
  const [lgShow, setLgShow] = useState(false);

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
          rules to the game are as followed  
          <Link to="/RoundTwo">Click Here To Start Game</Link>
        </Modal.Body>
      </Modal>
      <button>Play</button>
      <a href="Login">
        <button>Login</button>
      </a>
      <a href="Registration">
        <button>Sign-Up</button>
      </a>
    </>
  );
};

export default Homepage;
