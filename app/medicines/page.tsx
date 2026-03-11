import Link from "next/link";
import Counter from "../components/counter";

const page = () => {
    return (
        <div className="p-4 flex flex-col gap-4">
            <Link className="btn px-4 py-2 bg-white text-black rounded-md font-bold" href={`/`}>Medicines</Link>
            <h1>Medicines Route</h1>
            <Counter />
        </div>
    );
};

export default page;