import React from 'react'
import {Link} from "react-router-dom"


import "../components/Button.scss"

const STYLES = ['btn--primary', 'btn-outline']

const SIZE = ['btn--large','btn--medium','btn--mobile','btn--wide','btn--small']

const COLORS = ['primary', 'blue',  'light-blue', 'red', ]

export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    const checkButtonStyle = STYLES.includes(buttonSize) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]
    const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : COLORS[0]

    return (
        <Link to="/sign-up" ><button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
        onClick={onClick}
        type={type}>
            {children}
        </button></Link>
    )
}


