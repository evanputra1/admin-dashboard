import React from 'react'

const Button = ({ bgColor, color, text, borderRadius, size }) => {
  return (
    <div>
      <button type='button' style={{ backgroundColor: bgColor, color, borderRadius }} className={`text-${size} p-3 hover:drop-shadow-xl`}>
        {text}
      </button>
    </div>
  )
}

export default Button