// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Atoms
import { Button } from '../atom';

// Organisms
import { LimitCounter } from '../organisms';

// Constants
import { DANGER_LIMIT, LIMIT } from '../../shared/constant';

// Provider
import { CounterProvider } from '../../provider/use-counter-provider';

// Assets
import organisms from '../../assets/organisms.jpg';

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