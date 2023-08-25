// Libraries
import React from 'react';

// Molecules
import { Descriptor } from '../components/molecules';

// Templates
import { Header, Content, Footer } from '../components/templates';

// Pages
import { QA } from './qa';

// Provider
import { CounterProvider } from '../provider/use-counter-provider';

// Constants
import { LIMIT_QA } from '../shared/constant';

export const Pages = () => {
    return (
        <CounterProvider limit={LIMIT_QA} >
            <div style={{ margin: '100px 100px 0 100px' }}>
                <Header />
                <Content>
                    <QA />
                </Content>
                <Footer />
            </div>
        </CounterProvider>
    )
}