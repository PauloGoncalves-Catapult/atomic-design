// Libraries
import React from 'react';

// Atoms
import { Text } from '../atom';

type ContentType = {
    children: React.ReactNode;
}

export const Content: React.FC<ContentType> = ({children}) => {
    return (
        <div style={{ backgroundColor: 'lightgray', height: 400, justifyContent: 'center'}}>
            {children}
        </div>
    )
}