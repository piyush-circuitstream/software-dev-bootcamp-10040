import { useContext } from "react";
import { CounterContext } from "../CounterContext";

function DisplayCount() {
    const { counterState } = useContext(CounterContext);

    return (
        <h2>Count: {counterState.count}</h2>
    );
}

export default DisplayCount;