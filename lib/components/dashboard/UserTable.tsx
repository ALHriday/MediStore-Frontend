import { User } from "@/lib/types/types";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";

const UserTable = ({ users }: { users: User[] }) => {

    return (
        <div className="bg-white p-4 rounded-md shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full min-w-175">
                    <thead className="bg-cyan-800 text-white rounded-md shadow-md border-2 border-teal-400">
                        <tr>
                            <th className="px-6 py-4 text-left">User</th>
                            <th className="px-6 py-4 text-left">Phone</th>
                            <th className="px-6 py-4 text-left">Role</th>
                            <th className="px-6 py-4 text-left">Status</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users?.map((user: User) => <tr key={user.id} className="border-b border-slate-100 hover:border-slate-50 shadow-sm transition">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <Image className="rounded-full object-cover w-10 h-10"
                                        src={user?.image || 'https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000'}
                                        alt={user?.name || 'Guest'}
                                        width={40}
                                        height={40}
                                        title={user?.name || 'Guest'}
                                        priority
                                    />

                                    <div>
                                        <h2 className="font-medium text-slate-800">{user.name}</h2>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">{user?.phone || `N/A`}</td>
                            <td className="px-6 py-4">{user?.role}</td>
                            <td className="px-6 py-4">{user?.status}</td>
                            <td className="px-6 py-4 text-right"><button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"><MdDeleteForever size={20} /></button></td>
                        </tr>)}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default UserTable;