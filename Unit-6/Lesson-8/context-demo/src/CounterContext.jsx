import { createContext, useReducer } from 'react';

const initialState = {
    count: 0
};

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export const CounterContext = createContext();

export default function CounterProvider({ children }) {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <CounterContext.Provider value={{ counterState: state, counterDispatch: dispatch }}>
            {children}
        </CounterContext.Provider>
    );
}

