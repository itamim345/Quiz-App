import React, { useState } from 'react';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

export default function Question({ defaultQstn, setDefaultQstn, questions, options, correct_answer, score, setScore, getQuizes}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  return <div>
    <h2>Question: {defaultQstn+1}</h2>
    <div className='question-container'>
      <h2>{questions[defaultQstn].question}</h2>
      <div className="question-options">
        {error && <ErrorMsg/>}
        {
          options && options.map(optn => (
            <button>{optn}</button>
          ))
        }
      </div>
    </div>
  </div>;
}
