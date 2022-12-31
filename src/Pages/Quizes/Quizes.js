import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Question from '../../components/Question/Question';

export default function Quizes({name, questions, score, setScore}) {
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
    }, [questions]);

   const  handleShuffle  = (myoptions) => {
        return myoptions.sort(() => Math.random() - 0.5)
    }
  return (
    <div>
      <span>Welcome {name}</span>
      {questions ? (
        <>
          <div className="additinal-info">
            <span>Catagory: {questions[defaultQstn].category} </span>
            <span>| Score: {score}</span>
            <Question/>
          </div>
        </>
      ) : (
        <CircularProgress size={150} thickness={1}></CircularProgress>
      )}
    </div>
  );
}
