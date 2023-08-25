// Libraries
import { useNavigate } from 'react-router-dom';

// Atoms
import { Text, Button } from '../components/atom';

// Molecules
import { Descriptor } from '../components/molecules';

// Assets
import atom from '../assets/atoms.jpg';

export const Atoms = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Descriptor image={atom} description="Basic building blocks of matter, such as a button and text" />
            <Text text="Text" variation='h2' />
            <Button text="Button" onClick={() => {}} />
            <div style={{ marginTop: 100 }}>
                <Button text="Molecules" onClick={() => navigate('/molecules')} backgroundColor='orange' />
            </div>
        </div>
    )
}