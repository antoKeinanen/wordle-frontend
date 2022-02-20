import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import InputRow from './modules/inputRow';
import GuideModal from './modules/GuideModal';
import { IoHelpCircleOutline } from "react-icons/io5";
import words from './FI_5';
import FailedModal from './modules/FailedModal';



const App = () => {

  let [isOpen, setIsOpen] = useState(true);
  let [hasFailed, setHasFailed] = useState(false);
  let [usedInputs, setUsedInputs] = useState(0);
  let [isActive, setIsActive] = useState(false)
  let [word, setWord] = useState("rikki")

  useEffect(() => {
    if(usedInputs > 5){
      setHasFailed(true)
    }
    
  })

  if (!isActive) {
    setWord(words[Math.floor(Math.random() * words.length)])
    setIsActive(true)
  }  
  
  return (
    <>
      <div className="App">
        <div className='content'>
          {[0, 1, 2, 3, 4, 5].map(e => <InputRow used={usedInputs} setUsed={setUsedInputs} word={word} key={e} />)}
        </div>
        {isOpen && <GuideModal setIsOpen={setIsOpen} />}
        {hasFailed && <FailedModal setIsOpen={setIsOpen} word={word}/>}
      </div>
      {isOpen || <button className='icon' onClick={() => setIsOpen(true)}><IoHelpCircleOutline /></button>}
    </>
  );
}

export default App;
