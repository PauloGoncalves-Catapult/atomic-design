import React from 'react';
import { Text, Button } from '../atom';
import { useCounterProvider } from '../shared/use-counter-provider';

type BombType = {
    dangerLimit?: number;
    dangerColor?: string;
}

export const LimitCounter: React.FC<BombType> = ({ dangerLimit, dangerColor }) => {
    const { count, reachLimit, setCount } = useCounterProvider();
    
    const handleIncrease = () => setCount(count + 1);

    const dangerZone = React.useMemo(() => dangerLimit && count > dangerLimit, [count, dangerLimit]);

    return (
        <div>
            {!reachLimit ? (
                <>
                    <Text text={`${count}`} variation='h2' />
                    <Button text="Increase" onClick={handleIncrease} backgroundColor={dangerZone ? dangerColor : undefined} />
                </>
            ) : null}
            {!reachLimit && dangerZone ? (
                <div style={{ marginTop: 10 }}>
                    <Text text="Limit almost over" variation='text' color={dangerColor} />
                </div>
            ) : null}
        </div>
    )
}