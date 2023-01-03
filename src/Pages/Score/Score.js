import React from 'react';

export default function Score({name, score}) {
  return (
    <div>
      <h3>
        Congratulations! <i>{name}</i>
      </h3>
      <h2>
        Your Score is - <b>{score}</b>
      </h2>
    </div>
  );
}
