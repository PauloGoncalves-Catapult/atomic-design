// Libraries
import { useNavigate } from 'react-router-dom';

// Atoms
import { Button, Text } from '../components/atom';

// Organisms
import { LimitCounter } from '../components/organisms';

// Templates
import { Header, Content, Footer, ContentWrapper } from '../components/templates';

// Provider
import { CounterProvider } from '../provider/use-counter-provider';

// Molecules
import { Descriptor } from '../components/molecules';

// Constants
import { DANGER_LIMIT, LIMIT } from '../shared/constant';

// Assets
import templates from '../assets/templates.jpg';

export const Templates = () => {
    const navigate = useNavigate();

    return (
        <CounterProvider limit={LIMIT} >
            <Descriptor image={templates} description="Consisting mostly of groups of organisms to form a page" />
            <div style={{ display: 'flex', flexDirection: 'column', margin: '0 100px 0 100px' }}>
                <Header />
                <Content>
                    <ContentWrapper>
                        <Text text='Content' variation='h2' />
                        <LimitCounter dangerLimit={DANGER_LIMIT} dangerColor='red' />
                        <div style={{ marginTop: 100 }}>
                            <Button text="Pages" onClick={() => navigate('/pages')}  backgroundColor='orange'/>
                        </div>
                    </ContentWrapper>
                </Content>
                <Footer />
            </div>
        </CounterProvider>
    )
}