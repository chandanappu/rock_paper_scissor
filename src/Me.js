import React, { useState, useEffect } from "react";

const Me = ({ setMeChoice, computerSelect, }) => {


  const stone = () => {
    setMeChoice('stone');
    computerSelect();
  };

  const paper = () => {
    setMeChoice('paper');
    computerSelect();
  };

  const scissors = () => {
    setMeChoice('scissors');
   
    computerSelect();
  };

  return (
    <>
      <button onClick={stone}>stone</button>
      <button onClick={paper}>paper</button>
      <button onClick={scissors}>scissors</button>
    </>
  );
};

export default Me;
