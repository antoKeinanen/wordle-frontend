import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import InputRow from './modules/inputRow';
import GuideModal from './modules/GuideModal';
import words from './FI_5';
import FailedModal from './modules/FailedModal';
import SuccessModal from './modules/SuccessModal';
import NavBar from './modules/NavBar';



const App = () => {
  const isNew = localStorage.getItem("score") == null
  
  let [isOpen, setIsOpen] = useState(isNew)
  let [hasFailed, setHasFailed] = useState(false)
  let [usedInputs, setUsedInputs] = useState(0)
  let [isActive, setIsActive] = useState(false)
  let [hasWon, setHasWon] = useState(false)
  let [word, setWord] = useState("rikki")
  let [score, setScore] = useState(parseInt(localStorage.getItem("score"))||0)
  

  useEffect(() => {
    if(usedInputs > 5){
      setHasFailed(true)
      localStorage.setItem("score", "0")
    }
    
  },[usedInputs])
  

  if (!isActive) {
    setScore(score + 1)
    setWord(words[Math.floor(Math.random() * words.length)])
    setIsActive(true)
  }  
  
  return (
    <>
    {isOpen || hasFailed || hasWon || <NavBar setOpen={setIsOpen} score={score}/>}
      <div className="App">
        <div className='content'>
          {[0, 1, 2, 3, 4, 5].map(e => <InputRow score={score} setScore={setScore} success={setHasWon} used={usedInputs} setUsed={setUsedInputs} word={word} key={e} />)}
        </div>
        {isOpen && <GuideModal setIsOpen={setIsOpen}/>}
        {hasFailed && <FailedModal setIsOpen={setIsOpen} word={word} score={score} />}
        {hasWon && <SuccessModal setIsOpen={setIsOpen} word={word} score={score} />}
      </div>
    </>
  );
}

export default App;
