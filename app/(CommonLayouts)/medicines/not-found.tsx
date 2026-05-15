import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center gap-4 my-12'>
            <h1>Medicine not found!</h1>
            <Link href="/">
                <Button>Return Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;