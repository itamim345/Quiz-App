import { MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import "../../Data/Categories"
import Categories from '../../Data/Categories';

export default function Home() {
  return (
    <div className="home">
      <div className="quiz-configure-title">
        <h3>Configure the Quiz Options</h3>
      </div>
      <div className="quiz-configure-options">
        <TextField label="Enter your name" variant="outlined" size="small" />
        <TextField
          select
          label="Select Catagory"
          variant="outlined"
          size="small"
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
      </div>
    </div>
  );
}
