import React from 'react'

import './reset-button.css'

export default function ResetButton({resetBoard}) {
  return (
    <button onClick={resetBoard}>Reset game</button>
  )
}
