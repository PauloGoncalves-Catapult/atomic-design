// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Atom
import { Button } from './components/atom';

// Molecules
import { Counter } from './components/molecules';

// Assets
import molecules from './assets/molecules.jpg';

export const Molecules = () => {
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0);

    const handleIncrease = () => setCount(count + 1);
    
    return (
        <div>
            <img src={molecules} height={200} />
            <Counter count={count} onIncrease={handleIncrease} />
            <div style={{ marginTop: 100 }}>
                <Button text="Explore Organisms" onClick={() => navigate('/organisms')} />
            </div>
        </div>
    )
}