"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 className="text-2xl font-bold">Total Count: {count}</h1>
            <p className="text-red-500">{count === 20 ? `Can't increment count after 20.` : ''}</p>
            <p className="text-red-500">{count === 0 ? `Can't decrement count after 0.` : ''}</p>
            <div className="flex gap-4">
                <Button disabled={count >= 20 ? true : false} onClick={() => setCount(count + 1)}> Increment</Button>
                <Button disabled={count === 0 ? true : false} onClick={() => setCount(count - 1)}> Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;