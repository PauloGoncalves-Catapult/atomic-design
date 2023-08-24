import React from 'react';

type ButtonType = {
    text: string;
    backgroundColor?: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonType> = ({text, backgroundColor, onClick}) => {
    return (
        <button style={{ backgroundColor }} onClick={onClick}>
            {text}
        </button>
    )
}