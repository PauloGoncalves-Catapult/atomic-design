// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Atoms
import { Text, Button } from './components/atom';

// Assets
import atom from './assets/atoms.jpg';

export const Atom = () => {
    const navigate = useNavigate();

    return (
        <div>
            <img src={atom} height={200} />
            <Text text="Text" variation='h2' />
            <hr />
            <Button text="Button" onClick={() => {}} />
            <div style={{ marginTop: 100 }}>
                <Button text="Explore molecules" onClick={() => navigate('/molecules')} />
            </div>
        </div>
    )
}