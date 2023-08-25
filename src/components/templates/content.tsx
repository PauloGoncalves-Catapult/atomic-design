// Libraries
import React from 'react';

type ContentType = {
    children: React.ReactNode;
}

export const Content: React.FC<ContentType> = ({children}) => {
    return (
        <div style={{ backgroundColor: 'lightgray', margin: 10, height: 500, justifyContent: 'center'}}>
            {children}
        </div>
    )
}