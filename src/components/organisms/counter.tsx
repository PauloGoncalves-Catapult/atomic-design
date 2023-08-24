import React from 'react';
import { LimitCounter } from '../molecules';
import { Text } from '../atom';
import { CounterProvider, useCounterProvider } from '../shared/use-counter-provider';
import { LIMIT } from '../pages/constant';

type CounterType = {
    limit: number;
    dangerLimit: number;
}

export const Counter: React.FC<CounterType> = ({limit, dangerLimit}) => {
    const { reachLimit } = useCounterProvider();

    return (
        <div>
            <CounterProvider limit={limit} >
                <Text text="Count Limit" variation='h1' />
                <LimitCounter dangerLimit={dangerLimit} dangerColor='red' />
                {reachLimit ? (
                    <Text text="Limit reached" color="red" />
                ) : null}
            </CounterProvider>
        </div>
    )
}