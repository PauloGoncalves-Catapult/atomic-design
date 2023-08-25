// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Atom
import { Button } from '../components/atom';

// Molecules
import { Counter, Descriptor } from '../components/molecules';

// Templates
import { ContentWrapper } from '../components/templates';

// Assets
import molecules from '../assets/molecules.jpg';

export const Molecules = () => {
    const navigate = useNavigate();
    const [count, setCount] = React.useState(0);

    const handleIncrease = () => setCount(count + 1);
    
    return (
        <div>
            <Descriptor image={molecules} description="Group of atoms to build functionalities" />
            <ContentWrapper>
                <Counter count={count} onIncrease={handleIncrease} />
                <div style={{ marginTop: 100 }}>
                    <Button text="Organisms" onClick={() => navigate('/organisms')} backgroundColor='orange' />
                </div>
            </ContentWrapper>
        </div>
    )
}