import RoleAndNavigateList from "@/lib/components/dashboard/RoleAndNavigateList";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {

    const { user } = await getSession();
    if (!user) { return redirect('/login') };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <aside className="lg:w-64 bg-slate-200">
                <RoleAndNavigateList role={user.role} />
            </aside>
            <main className="lg:flex-1 bg-slate-50">
                <div className="bg-[rgb(0,128,150)] text-white px-8 py-4">
                    <h1 className="text-4xl font-bold">Hello, {user.name.toUpperCase()}👨‍💻</h1>
                    <h2 className="text-2xl">Welcome to dashboard</h2>
                </div>
                <section className="max-w-7xl">
                    {children}
                </section>
            </main>
        </div>
    );
};

export default layout;