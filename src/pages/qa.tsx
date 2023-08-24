// Libraries
import React from 'react';

// Atoms
import { Text } from '../components/atom';

// Organisms
import { LimitCounter } from '../components/organisms';

// Provider
import { useCounterProvider } from '../provider/use-counter-provider';

// Constants
import { DANGER_LIMIT_QA } from '../shared/constant';

// Assets
import bomb from '../assets/bomb.png'
import explosionFail from '../assets/explosion.gif'

export const QA = () => {
    const { reachLimit } = useCounterProvider()

    return (
        <div style={{ marginTop: 20, paddingTop: 10 }}>
            {reachLimit ? (
                <>
                    <Text text="Thank you" variation='h1' />
                    <img src={explosionFail} height={200} />
                </>
            ) : (
                <>
                    <Text text="Q & A" variation='h1' />
                    <LimitCounter dangerLimit={DANGER_LIMIT_QA} dangerColor='red' />
                    <img src={bomb} height={150} />
                </>
            )}
        </div>
    )
}