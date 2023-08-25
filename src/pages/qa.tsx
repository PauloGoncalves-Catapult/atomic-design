// Atoms
import { Text } from '../components/atom';

// Organisms
import { LimitCounter } from '../components/organisms';

// Templates
import { ContentWrapper } from '../components/templates';

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
        <ContentWrapper>

            {reachLimit ? (
                <>
                    <Text text="Thank you" variation='h1' />
                    <img src={explosionFail} height={200} />
                </>
            ) : (
                <>
                    <Text text="Q&A" variation='h2' />
                    <Text text="DETONATE THE BOMB" />
                    <LimitCounter dangerLimit={DANGER_LIMIT_QA} dangerColor='red' />
                    <img src={bomb} height={150} />
                </>
            )}
        </ContentWrapper>
    )
}