import { useEffect, useState } from "react";

function RerunEffect() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        const timer1 = setInterval(() => {
            setCount1((prevCount) => prevCount + 1);
        }, 1000);

        const timer2 = setInterval(() => {
            setCount2((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            console.log("Cleanup time?");
            clearInterval(timer2);
        }

    }, []);

    return (
        <>
            <h1>Rerun Effect</h1>
            <h2>Count 1: {count1}</h2>
            <h2>Count 2: {count2}</h2>
        </>
    );
}

export default RerunEffect;