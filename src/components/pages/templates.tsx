// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Atoms
import { Button, Text } from '../atom';

// Organisms
import { LimitCounter } from '../organisms';

// Templates
import { Header, Content, Footer } from '../templates';

// Provider
import { CounterProvider } from '../../provider/use-counter-provider';

// Constants
import { LIMIT } from '../../shared/constant';

// Assets
import templates from '../../assets/templates.jpg';

export const Templates = () => {
    const navigate = useNavigate();

    return (
        <CounterProvider limit={LIMIT} >
            <div style={{ width: 800 }}>
                <img src={templates} height={100} />
                <Header />
                <Content>
                    <Text text='Content' variation='h2' />
                    <LimitCounter dangerLimit={10} dangerColor='red' />
                    <div style={{ marginTop: 100 }}>
                        <Button text="Explore Pages" onClick={() => navigate('/pages')} />
                    </div>
                </Content>
                <Footer />
            </div>
        </CounterProvider>
    )
}