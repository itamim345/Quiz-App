import React, { useEffect } from 'react';

export default function Quizes({name, questions, score, setScore}) {
    useEffect(() => {
      console.log(questions);
    }, [questions]);
  return (
    <div>
      Quizes
    </div>
  );
}
