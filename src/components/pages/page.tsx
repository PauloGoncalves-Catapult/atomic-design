// Libraries
import React from 'react';

// Templates
import { Header, Content, Footer } from '../templates';

// Pages
import { QA } from '../pages/qa';


// Provider
import { CounterProvider } from '../../provider/use-counter-provider';

// Constants
import { LIMIT_QA } from '../../shared/constant';

// Assets
import pages from '../../assets/pages.jpg';

export const Page = () => {
    return (
        <CounterProvider limit={LIMIT_QA} >
            <div style={{ width: 800 }}>
                <img src={pages} height={200} />
                <Header />
                <Content>
                    <QA />
                </Content>
                <Footer />
            </div>
        </CounterProvider>
    )
}