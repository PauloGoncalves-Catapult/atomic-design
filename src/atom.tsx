import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Button } from './components/atom';

export const Atom = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <Text text="Text" variation='h2' />
                <Button text="Button" onClick={() => {}} />
            </div>
            <div style={{ marginTop: 100 }}>
                <Button text="Explore molecules?" onClick={() => navigate('/molecules')} />
            </div>
        </div>
    )
}