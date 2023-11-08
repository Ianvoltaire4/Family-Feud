import React from 'react'
import { useState } from 'react'
// import '/images/flipacoin.webp'
// import '../components/Flipcoin.css'
function Flipcoin() {
const[flip,setFlip] = useState()
const flipCoin = () => {
    const random = Math.random() < 0.5 ? 'Heads' : 'Tails';
    setFlip(random);
}
  return (
    <div>
        <h2>Flip a Coin</h2>
        <div className='Container'>
        {flip && <p>{flip}</p>}
<img className='FlipCoin' src="/images/flipacoin.webp"/>
</div>
<button onClick={flipCoin}> Flip a coin</button>
    </div>
  )
}
export default Flipcoin