import { Navbar1 } from "@/components/navbar1";
import { getSession } from "@/lib/getSession";


const Navbar = async () => {
    const session = await getSession();
    const user = session?.user;

    return (
        <div className="relative">
            <Navbar1 userData={user} />
        </div>
    );
};

export default Navbar;