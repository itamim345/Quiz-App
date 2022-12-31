import React, { useEffect, useState } from 'react';

export default function Quizes({name, questions, score, setScore}) {
    const [options, setOptions] = useState();
    const [defaultQstn, setDefaultQstn] = useState(0);
    useEffect(() => {
        setOptions(
          questions &&
            handleShuffle([
              questions[defaultQstn]?.correct_answer,
              ...questions[defaultQstn]?.incorrect_answer,
            ])
        );
    }, [questions]);

   const  handleShuffle  = (myoptions) => {
        return myoptions.sort(() => Math.random() - 0.5)
    }
  return (
    <div>
      Quizes
    </div>
  );
}
