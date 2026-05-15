"use client"

import { Button } from "@/components/ui/button";
import useStats from "@/lib/hooks/useStats";
import { Dispatch, SetStateAction } from "react";

const Pagination = ({ skip, setSkip }: { skip: number, setSkip: Dispatch<SetStateAction<number>> }) => {

    const { stats } = useStats();
    const total = stats?.totalMedicines || 10;
    const pages = Math.ceil(total / 10);


    const handlePrev = () => {
        if (skip > 0) setSkip(skip - 1);
    }
    const handleNext = () => {
        if (skip < pages - 1) setSkip(skip + 1);
    }

    return (
        <div className="flex gap-6 justify-center items-center my-12 py-2">
            <div>
                <Button onClick={() => handlePrev()}>Prev</Button>
            </div>
            <div className="max-w-60 flex justify-start items-center gap-2 overflow-x-auto">
                {Array.from({ length: pages || 1 }).map((_, i) =>
                    <div key={i} className="text-md font-bold">
                        <Button className={`${skip === i ? 'bg-blue-500' : ''} hover:bg-blue-500`} onClick={() => setSkip(1 * i)}>{i + 1}</Button>
                    </div>
                )}
            </div>
            <div>
                <Button onClick={() => handleNext()}>Next</Button>
            </div>
        </div>
    );
};

export default Pagination;