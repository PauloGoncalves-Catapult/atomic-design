// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Atoms
import { Text, Button } from '../components/atom';

// Assets
import atomicDesign from '../assets/atomic-design.png';
import { Descriptor } from '../components/molecules';

export const Intro = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Text text="Atomic Design" variation='h1' color='orange' />
            <Descriptor image={atomicDesign} />
            <div style={{ marginTop: 100 }}>
                <Button text="Atom" onClick={() => navigate('/atoms')} backgroundColor='orange' />
            </div>
        </div>
    )
}