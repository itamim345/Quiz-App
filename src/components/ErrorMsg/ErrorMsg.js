import React from 'react'
import "./ErrorMsg.css"

export default function ErrorMsg({error}) {
  return (
    <div className='error-msg'>
      <span>{error}</span>
    </div>
  );
}
