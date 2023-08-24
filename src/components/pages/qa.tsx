import React from 'react';
import { Text } from '../atom';
import { DANGER_LIMIT_QA, LIMIT_QA } from './constant';
import { useCounterProvider } from '../shared/use-counter-provider';
import { Counter } from '../organisms';
import bomb from '../../assets/bomb.png'
import explosionFail from '../../assets/explosion.gif'

export const QA = () => {
    const { reachLimit } = useCounterProvider()

    return (
        <>
            <Text text="Q & A" variation='h1' />
            <Counter limit={LIMIT_QA} dangerLimit={DANGER_LIMIT_QA} />
            {reachLimit ? (
                <div style={{ marginTop: 30 }}>
                    <Text text="Thank you" variation='h1' />
                    <img src={explosionFail} height={300} />
                </div>
            ) : (
                <img src={bomb} alt="earth" height={300} />
            )}
        </>
    )
}