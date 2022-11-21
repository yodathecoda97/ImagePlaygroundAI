import React from 'react'
import styled from 'styled-components/'

const Btn = styled.button`

`

const Button = ({text, link}) => {
    return (
        <Btn>
            <a href={link} aria-label={text} target="_blank" rel="noreferrer">
                {text}
            </a>
        </Btn>
    )
}

export default Button