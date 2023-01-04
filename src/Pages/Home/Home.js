import { Button, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import "../../Data/Categories"
import Categories from '../../Data/Categories';

export default function Home({name, setName, getQuestions}) {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = () => {
        if(!category || !difficulty || !name){
            setError(true)
            return;
        }else {
            setError(false)
            getQuestions(category,difficulty);
            navigate("/quiz")
        }
    }
  return (
    <div className="home">
      <div className="left-home">
        <img src="https://i.ibb.co/68WmdKB/quiz-imh.png" alt="left-home-img" />
      </div>
      <div className="right-home">
        <div className="quiz-configure-title">
          <h3>Configure the Quiz Options</h3>
        </div>
        <div className="quiz-configure-options">
          {error && <ErrorMsg />}
          <TextField
            label="Enter your name"
            variant="outlined"
            size="small"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Catagory"
            variant="outlined"
            size="small"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((category) => (
              <MenuItem key={category.category} value={category.value}>
                {category.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            size="small"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Secondary
          </Button>
        </div>
      </div>
    </div>
  );
}
