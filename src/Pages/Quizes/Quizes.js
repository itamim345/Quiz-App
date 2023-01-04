import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Question from '../../components/Question/Question';
import "../Quizes/Quizes.css"

export default function Quizes({name, questions, score, setScore, getQuizes}) {
    const [options, setOptions] = useState();
    const [defaultQstn, setDefaultQstn] = useState(0);
    useEffect(() => {
        setOptions(
          questions &&
            handleShuffle([
              questions[defaultQstn]?.correct_answer,
              ...questions[defaultQstn]?.incorrect_answers,
            ])
        );
    }, [questions, defaultQstn]);

   const  handleShuffle  = (myoptions) => {
        return myoptions.sort(() => Math.random() - 0.5)
    }
  return (
    <div className='quizes-container'>
      <span>Welcome {name}</span>
      {questions ? (
        <>
          <div className="additinal-info">
            <span>Catagory: {questions[defaultQstn].category} </span>
            <span>| Score: {score}</span>
            <Question 
                defaultQstn={defaultQstn}
                setDefaultQstn={setDefaultQstn}
                questions={questions}
                options={options}
                correct_answer={questions[defaultQstn]?.correct_answer}
                score={score}
                setScore={setScore}
                getQuizes={getQuizes}
            />
          </div>
        </>
      ) : (
        <CircularProgress size={150} thickness={1}></CircularProgress>
      )}
    </div>
  );
}
