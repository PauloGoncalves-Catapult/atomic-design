// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Atoms
import { Button } from '../components/atom';

// Organisms
import { LimitCounter } from '../components/organisms';

// Molecules
import { Descriptor } from '../components/molecules';

// Constants
import { DANGER_LIMIT, LIMIT } from '../shared/constant';

// Provider
import { CounterProvider } from '../provider/use-counter-provider';

// Assets
import organisms from '../assets/organisms.jpg';

export const Organisms = () => {
    const navigate = useNavigate();

    return (
        <CounterProvider limit={LIMIT} >
            <Descriptor image={organisms} description="Combining molecules together to form organisms that make functional interfaces" />
            <LimitCounter dangerLimit={DANGER_LIMIT} dangerColor='red' />
            <div style={{ marginTop: 100 }}>
                <Button text="Templates" onClick={() => navigate('/templates')} backgroundColor='orange' />
            </div>
        </CounterProvider>
    )
}