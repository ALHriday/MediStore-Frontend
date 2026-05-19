import UserProfile from "@/lib/components/userProfile/userProfile";
import { getSession } from "@/lib/getSession";

const page = async () => {
    const session = await getSession();
    const user = session?.user;
    return (
        <div className="flex justify-center items-center p-4 mx-auto">
            <UserProfile userData={user} />
        </div>
    );
};

export default page;