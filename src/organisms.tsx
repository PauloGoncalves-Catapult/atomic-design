// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Atoms
import { Button } from './components/atom';

// Organisms
import { LimitCounter } from './components/organisms';

// Constants
import { DANGER_LIMIT, LIMIT } from './shared/constant';

// Assets
import organisms from './assets/organisms.jpg';

// Provider
import { CounterProvider } from './provider/use-counter-provider';

export const Organisms = () => {
    const navigate = useNavigate();

    return (
        <CounterProvider limit={LIMIT} >
            <img src={organisms} height={200} />
            <LimitCounter dangerLimit={DANGER_LIMIT} dangerColor='red' />
            <div style={{ marginTop: 100 }}>
                <Button text="Explore Templates" onClick={() => navigate('/templates')} />
            </div>
        </CounterProvider>
    )
}