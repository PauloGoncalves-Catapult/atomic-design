// Libraries
import { useNavigate } from 'react-router-dom';

// Atoms
import { Text, Button } from '../components/atom';

// Molecules
import { Descriptor } from '../components/molecules';

// Assets
import atomicDesign from '../assets/atomic-design.png';

export const Intro = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Text text="Atomic Design" variation='h1' color='orange' />
            <Descriptor image={atomicDesign} />
            <Text text="Mental model to help us think of our user interfaces" variation='h2' />
            <Text text={
                <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                    <li>Promote consistency</li>
                    <li>Speed up development</li>
                    <li>Collaborative workflow</li>
                    <li>Establish a shared vocabulary</li>
                    <li>Provide documentation</li>
                    <li>Help creates cross-browser/device, performance, and accessibility</li>
                    <li>Set the friendly foundation for teams to modify, extend, and improve on over time.</li>
                </ul>
            } />
            <div style={{ marginTop: 100 }}>
                <Button text="Atom" onClick={() => navigate('/atoms')} backgroundColor='orange' />
            </div>
        </div>
    )
}