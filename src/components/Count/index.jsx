import { useEffect, useLayoutEffect, useReducer, useState } from "react";


export default function Count() {
    // const [count, setCount] = useState(0);
    const [count2, setCount2] = useReducer((state, action) => state + action, 0);

    // useEffect(() => {
    //     console.log('useEffect-----------');
    // }, []);

    // useLayoutEffect(() => {
    //     console.log('useLayoutEffect-----------');
    // }, []);


    return (
        <div>
            {/* <button onClick={() => {
                setCount(count + 1);
                setCount(count + 4);
                // setCount((count) => count + 1);
                // setCount((count) => count + 2);
            }}>useState: {count}</button> */}
            <button onClick={() => {
                setCount2(1);
                setCount2(2);
            }}>useReducer: {count2}</button>
        </div>
    )
}
