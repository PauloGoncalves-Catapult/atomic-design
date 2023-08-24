import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './components/atom';
import { Counter } from './components/molecules';

export const Molecules = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Counter />
            <div style={{ marginTop: 100 }}>
                <Button text="Explore Organisms" onClick={() => navigate('/organisms')} />
            </div>
        </div>
    )
}