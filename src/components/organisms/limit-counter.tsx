// Libraries
import React from 'react';

// Atoms
import { Text } from '../atom';

// Molecules
import { Counter } from '../molecules';

// Provider
import { useCounterProvider } from '../../provider/use-counter-provider';

type LimitCounterType = {
    dangerLimit: number;
    dangerColor?: string;
}

export const LimitCounter: React.FC<LimitCounterType> = ({ dangerLimit, dangerColor }) => {
    const { count, reachLimit, increaseCount } = useCounterProvider();

    const dangerZone = React.useMemo(() => count >= dangerLimit, [count, dangerLimit]);

    return (
        <div>
            <Counter count={count} onIncrease={increaseCount} />
            {!reachLimit && dangerZone ? (
                <div style={{ marginTop: 10 }}>
                    <Text text="Limit almost over" variation='text' color={dangerColor} />
                </div>
            ) : null}
        </div>
        
    )
}