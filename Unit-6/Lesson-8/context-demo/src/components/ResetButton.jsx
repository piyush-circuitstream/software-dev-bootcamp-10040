import { useContext } from "react";
import { CounterContext } from "../CounterContext";

function ResetButton() {
    const { counterDispatch } = useContext(CounterContext);

    return (
        <button onClick={() => counterDispatch({ type: 'reset' })}>Reset</button>
    );
}

export default ResetButton;