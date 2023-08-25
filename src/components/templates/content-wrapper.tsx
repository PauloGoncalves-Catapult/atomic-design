// Libraries
import React from 'react';

type ContentType = {
    children: React.ReactNode;
}

export const ContentWrapper: React.FC<ContentType> = ({children}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {children}
        </div>
    )
}