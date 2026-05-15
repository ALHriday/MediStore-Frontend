import { useEffect, useState } from "react";

export default function useDebounce<T>(text: T, delay: number): T {
    const [value, setValue] = useState<T>(text);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setValue(text);
        }, delay);
        return () => clearTimeout(timeOut);
    }, [text, delay]);
    return value;
};
