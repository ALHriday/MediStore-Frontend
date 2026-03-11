"use client"

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 className="text-2xl font-bold">Total Count: {count}</h1>
            <p className="text-red-500">{count === 20 ? `Can't increment count after 20.` : ''}</p>
            <p className="text-red-500">{count === 0 ? `Can't decrement count after 0.` : ''}</p>
            <div className="flex gap-4">
                <button disabled={count >= 20 ? true : false} className="px-4 py-2 my-4 rounded-md bg-white text-black" onClick={() => setCount(count + 1)}> Increment</button>
                <button disabled={count === 0 ? true : false} className="px-4 py-2 my-4 rounded-md bg-white text-black" onClick={() => setCount(count - 1)}> Decrement</button>
            </div>
        </div>
    );
};

export default Counter;