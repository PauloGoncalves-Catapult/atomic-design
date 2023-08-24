// Libraries
import React from 'react';

// Atoms
import { Text } from '../atom';

// Constants
import { DANGER_LIMIT_QA } from '../../shared/constant';

// Organisms
import { LimitCounter } from '../organisms';

// Provider
import { useCounterProvider } from '../../provider/use-counter-provider';

// Assets
import bomb from '../../assets/bomb.png'
import explosionFail from '../../assets/explosion.gif'

export const QA = () => {
    const { reachLimit } = useCounterProvider()

    return (
        <div>
            {reachLimit ? (
                <div style={{ marginTop: 30 }}>
                    <Text text="Thank you" variation='h1' />
                    <img src={explosionFail} height={200} />
                </div>
            ) : (
                <>
                    <Text text="Q & A" variation='h1' />
                    <LimitCounter dangerLimit={DANGER_LIMIT_QA} dangerColor='red' />
                    <img src={bomb} height={300} />
                </>
            )}
        </div>
    )
}