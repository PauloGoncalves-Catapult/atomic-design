// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Atoms
import { Text, Button } from '../components/atom';

// Assets
// import atom from '../../assets/atoms.jpg';

export const Intro = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* <img src={atom} height={200} /> */}
            <Text text="Atomic Design" variation='h1' color='orange' />
            <Text text="What is?" variation='h2' />
            <Text text="Describing here" />
            <div style={{ marginTop: 100 }}>
                <Button text="Explore Atom" onClick={() => navigate('/atoms')} />
            </div>
        </div>
    )
}