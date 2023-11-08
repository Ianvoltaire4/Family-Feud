import React from 'react'
import { useState } from 'react'
// import '/images/flipacoin.webp'
import '../Flipcoin.css'
function Flipcoin() {
const[flip,setFlip] = useState()
const flipCoin = () => {
    const random = Math.random() < 0.5 ? 'Heads' : 'TAILS, ';
    setFlip(random);
}
  return (
    <div>
        <h2>Flip a Coin</h2>
        <div className='Container'>
        {flip && <p>{flip}</p>}
<img className='FlipCoin' id='coinFlip' src="https://tinyurl.com/2pz8z6pm"/>
</div>
<button onClick={flipCoin}> Flip a coin</button>
    </div>
  )
}
export default Flipcoin