import { useContext } from "react";
import { CounterContext } from "../CounterContext";

function IncrementButton() {
    const { counterDispatch } = useContext(CounterContext);

    return (
        <button onClick={() => counterDispatch({ type: 'increment' })}>Increment</button>
    );
}

export default IncrementButton;