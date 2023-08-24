import React from 'react';
import { Text, Button } from '../atom';

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    const handleIncrease = () => setCount(count + 1);

    return (
        <div>
            <Text text="Counter Molecule" variation='h2' />
            <Text text={`${count}`} variation='h1' />
            <Button text="Increase" onClick={handleIncrease} />
        </div>
    )
}