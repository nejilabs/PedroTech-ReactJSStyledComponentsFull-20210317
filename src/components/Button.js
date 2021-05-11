import React from 'react'

const Button = ({ className, buttonLabel }) => {
  return <button className={className}><label>{buttonLabel}</label></button>
}

export default Button
