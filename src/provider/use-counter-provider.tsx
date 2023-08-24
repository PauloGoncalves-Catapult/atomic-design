import React from 'react';

type LimitCounterContextShape = {
    count: number;
    increaseCount: () => void;
    reachLimit: boolean;
}

export const LimitCounterContext = React.createContext<LimitCounterContextShape>({
    count: 0,
    increaseCount: () => {},
    reachLimit: false,
})

interface CounterProviderType {
    limit: number;
    children: React.ReactNode;
}

export const CounterProvider: React.FC<CounterProviderType> = ({limit, children}) => {
    const [count, setCount] = React.useState(0);
    const [reachLimit, setReachLimit] = React.useState(false);

    const increaseCount = () => {
        if (count > limit - 2) {
            setReachLimit(true);
        }
        if (!reachLimit) {
            setCount(count + 1);
        } else {
            setCount(0)
            setReachLimit(false)
        }
    }

    return (
        <LimitCounterContext.Provider value={{count, increaseCount, reachLimit}}>
            {children}
        </LimitCounterContext.Provider>
    )
}

export const useCounterProvider = () => React.useContext(LimitCounterContext);