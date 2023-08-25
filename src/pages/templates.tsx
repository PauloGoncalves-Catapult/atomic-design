// Libraries
import { useNavigate } from 'react-router-dom';

// Atoms
import { Button, Text } from '../components/atom';

// Organisms
import { LimitCounter } from '../components/organisms';

// Templates
import { Header, Content, Footer } from '../components/templates';

// Provider
import { CounterProvider } from '../provider/use-counter-provider';

// Molecules
import { Descriptor } from '../components/molecules';

// Constants
import { LIMIT } from '../shared/constant';

// Assets
import templates from '../assets/templates.jpg';

export const Templates = () => {
    const navigate = useNavigate();

    return (
        <CounterProvider limit={LIMIT} >
            <Descriptor image={templates} description="Consisting mostly of groups of organisms to form a page" />
            <div style={{ width: 800 }}>
                <Header />
                <Content>
                    <Text text='Content' variation='h2' />
                    <LimitCounter dangerLimit={10} dangerColor='red' />
                    <div style={{ marginTop: 100 }}>
                        <Button text="Pages" onClick={() => navigate('/pages')}  backgroundColor='orange'/>
                    </div>
                </Content>
                <Footer />
            </div>
        </CounterProvider>
    )
}