import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn-standard', 'btn-outline'];

function Button({
    children,
    buttonStyle
}) {
    const getButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  return (
    <Link to={'/'}>
        <button className={`btn ${getButtonStyle}`}>{children}</button>
    </Link>
  )
}

export default Button