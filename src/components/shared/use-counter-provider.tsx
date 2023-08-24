import React from 'react';

type LimitCounterContextShape = {
    count: number;
    setCount: (newCount: number) => void;
    reachLimit: boolean;
}

export const LimitCounterContext = React.createContext<LimitCounterContextShape>({
    count: 0,
    setCount: () => {},
    reachLimit: false,
})

interface CounterProviderType {
    limit: number;
    children: React.ReactNode;
}

export const CounterProvider: React.FC<CounterProviderType> = ({limit, children}) => {
    const [count, setCount] = React.useState(0);
    const [reachLimit, setReachLimit] = React.useState(false);

    React.useEffect(() => {
        if (count > limit) {
            setReachLimit(true);
        }
    }, [count])

    return (
        <LimitCounterContext.Provider value={{count, setCount, reachLimit}}>
            {children}
        </LimitCounterContext.Provider>
    )
}

export const useCounterProvider = () => React.useContext(LimitCounterContext);