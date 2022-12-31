import React, { useState } from 'react';

export default function Question({ defaultQstn, setDefaultQstn, questions, options, correct_answer, score, setScore, getQuizes}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  return <div></div>;
}
