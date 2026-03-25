import { useContext } from "react";
import { CounterContext } from "../CounterContext";

function DecrementButton() {
    const { counterDispatch } = useContext(CounterContext);

    return (
        <button onClick={() => counterDispatch({ type: 'decrement' })}>Decrement</button>
    );
}

export default DecrementButton;