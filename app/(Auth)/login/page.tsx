import { Login1 } from "@/components/login1";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

const page = async () => {
    const session = await getSession();

    if (session?.user) {
        redirect('/');
    }

    return (
        <div>
            <Login1 />
        </div>
    );
};

export default page;