// Libraries
import React from 'react';

// Atoms
import { Text } from '../atom';

export const Header = () => {
    return (
        <div style={{ backgroundColor: 'lightgray', height: 80, justifyContent: 'center' }}>
            <Text text='Header' variation='h2' />
        </div>
    )
}