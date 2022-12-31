import React, { useState } from 'react';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

export default function Question({ defaultQstn, setDefaultQstn, questions, options, correct_answer, score, setScore, getQuizes}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const handleSelect = (optn) => {
    if(selected === optn && selected===correct_answer){
      return "select"
    } else if (selected === optn && selected !== correct_answer){
      return "wrong"
    }else if (optn === correct_answer){
      return "select"
    }
  }
  const handleCheck = (optn) => {
    setSelected(optn);
    if(optn === correct_answer){
      setScore(score+1);
    }
    setError(false);
  }
  return <div>
    <h2>Question: {defaultQstn+1}</h2>
    <div className='question-container'>
      <h2>{questions[defaultQstn].question}</h2>
      <div className="question-options">
        {error && <ErrorMsg/>}
        {
          options && options.map(optn => (
            <button onClick={() => handleCheck(optn)} className={`singleOption ${selected && handleSelect(optn)}`} key={optn} disabled={selected}>{optn}</button>
          ))
        }
      </div>
    </div>
  </div>;
}
