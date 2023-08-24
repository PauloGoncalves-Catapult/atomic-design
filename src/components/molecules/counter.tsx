import React from 'react';
import { Text, Button } from '../atom';

type CounterTypes = {
    count: number;
    onIncrease: () => void;
}

export const Counter: React.FC<CounterTypes> = ({ count, onIncrease }) => {
    return (
        <div>
            <Text text={`${count}`} variation='h1' />
            <Button text="Increase" onClick={onIncrease} />
        </div>
    )
}