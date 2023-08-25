// Libraries
import { useNavigate } from 'react-router-dom';

// Atoms
import { Text, Button } from '../components/atom';

// Molecules
import { Descriptor } from '../components/molecules';

// Templates
import { ContentWrapper } from '../components/templates';

// Assets
import atomicDesign from '../assets/atomic-design.png';

export const Intro = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Text text="Atomic Design" variation='h1' color='orange' />
            <div style={{ marginBottom: 30 }}>
                <Text text={
                    <>
                    Atomic design is a methodology composed of five distinct stages working together to create<br/> interface design systems in a more deliberate and hierarchical manner
                    </>
                } />
            </div>
            <Descriptor image={atomicDesign} />
            <ContentWrapper>
                <Text text={
                    <div style={{ margin: '0 200px 0 200px' }}>
                    <strong>What Atomic Design is NOT?</strong>
                    <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                        <li>Easier to learn</li>
                        <li>Easier to develop</li>
                        <li>Nicer looking</li>
                    </ul>
                    <strong> What Atomic Design IS</strong>
                    <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                        <li>Speed up development</li>
                        <li>Promote consistency</li>
                        <li>Collaborative workflow</li>
                        <li>Establish a shared vocabulary</li>
                        <li>Provide documentation</li>
                        <li>Help creates cross-browser/device, performance, and accessibility</li>
                        <li>Set the friendly foundation for teams to modify, extend, and improve on over time.</li>
                    </ul>
                    </div>
                } />
                <div style={{ marginTop: 100 }}>
                    <Button text="Atom" onClick={() => navigate('/atoms')} backgroundColor='orange' />
                </div>
            </ContentWrapper>
        </div>
    )
}