import { Button, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import "../../Data/Categories"
import Categories from '../../Data/Categories';

export default function Home({name, setName}) {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
  return (
    <div className="home">
      <div className="quiz-configure-title">
        <h3>Configure the Quiz Options</h3>
      </div>
      <div className="quiz-configure-options">
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

        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </div>
    </div>
  );
}
