import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMsg from '../ErrorMsg/ErrorMsg';
import '../Question/Question.css'

export default function Question({ defaultQstn, setDefaultQstn, questions, options, correct_answer, score, setScore, getQuizes}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate()
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
  const handleNext = () => {
    if(defaultQstn > 8){
      navigate("/result")
    }else if (selected){
      setDefaultQstn(defaultQstn+1);
      setSelected()
    }
  }
  return (
    <div>
      <h2>Question: {defaultQstn + 1}</h2>
      <div className="question-container">
        <h2>{questions[defaultQstn].question}</h2>
        <div className="question-options">
          {error && <ErrorMsg />}
          {options &&
            options.map((optn) => (
              <button
                onClick={() => handleCheck(optn)}
                className={`singleOption ${selected && handleSelect(optn)}`}
                key={optn}
                disabled={selected}
              >
                {optn}
              </button>
            ))}
        </div>
        <div className="bootom-btns">
          <Button variant="contained" color="secondary" href="/">
            Quit
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
