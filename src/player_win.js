import React, { useState } from 'react';
import { Computer } from './Computer';
import Me from './Me';


const arr = ['stone', 'paper', 'scissors'];

const Player_win = () => {
  const [computerChoice, setComputerChoice] = useState('');
  const [meChoice, setMeChoice] = useState('');
  const [winner,setWinner]=useState('');

  const funwinner=()=>{
    if (meChoice === computerChoice) {
        return "It's a tie!";
      } else if (
        (meChoice === 'stone' && computerChoice === 'scissors') ||
        (meChoice === 'paper' && computerChoice === 'stone') ||
        (meChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return 'You win!';
      } else if (
        (meChoice === 'stone' && computerChoice === 'paper') ||
        (meChoice === 'paper' && computerChoice === 'scissors') ||
        (meChoice === 'scissors' && computerChoice === 'stone')
      ) {
        return 'Computer wins!';
      } else {
        return 'Invalid game state';
      }
    };

  const computerSelect = () => {
    const choice = arr[Math.floor(Math.random() * arr.length)];
    setComputerChoice(choice);
  };

  return (
    <>
     
      <div>
       
        <h2>Your Choice: {meChoice}</h2>
        <h2>Computer's Choice: {computerChoice}</h2>
        <div>
        
        {meChoice && computerChoice && <h2>{funwinner()}</h2>}
      </div>
    </div>
    
      <Me setMeChoice={setMeChoice} computerSelect={computerSelect} />
      <Computer computerChoice={computerChoice} />
      
    </>
  );
}

export default Player_win;
