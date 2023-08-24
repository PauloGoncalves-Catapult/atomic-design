import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './components/atom';
import { Counter } from './components/organisms';
import { DANGER_LIMIT, LIMIT } from './components/pages/constant';

export const Organisms = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Counter limit={LIMIT} dangerLimit={DANGER_LIMIT} />
            <div style={{ marginTop: 100 }}>
                <Button text="Explore Pages" onClick={() => navigate('/pages')} />
            </div>
        </div>
    )
}