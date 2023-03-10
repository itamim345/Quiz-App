import { Button } from '@material-ui/core';
import React from 'react';
import "./Score.css"

export default function Score({name, score}) {
  return (
    <div className="score-container">
      <img src="https://i.ibb.co/j8bcJnN/smily-face.png" alt="smily-face" />
      <h3>
        Congratulations! <i>{name}</i>
      </h3>
      <h2>
        Your Score is = <b>{score} out of 10</b>
      </h2>
      <Button variant="contained" color="secondary" href="/">
        Start Quiz Again
      </Button>
    </div>
  );
}
