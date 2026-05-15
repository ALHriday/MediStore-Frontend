import UserTable from "@/lib/components/dashboard/UserTable";
import getUserData from "@/lib/getUserData";

const page = async () => {
    const result = await getUserData();

    return (
        <div>
            <UserTable users={result.result} />
        </div>
    );
};

export default page;