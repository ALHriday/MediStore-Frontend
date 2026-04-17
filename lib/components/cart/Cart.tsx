"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const Cart = () => {

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    // const router = useRouter();

    const handleUpdateUserProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('phone', phone);

            // const result = await userService.updateUserProfile(formData);

            // if (result.result.success) {
            //     toast.success('Your Profile Updated Successful.');
            //     router.push('/');
            //     router.refresh();
            //     return result.result;
            // }

        } catch (err) {
            return err;
        } finally {
            // setLoading(false);
        }
    }

    const handleCancel = () => {
        setName('');
        setPhone('');
        // router.refresh();
        // router.push('/');
    }

    return (
        <div className="flex flex-col justify-center items-center gap-8 p-4 mx-auto">
            <div className="w-10/12 md:w-6/12 lg:h-5/12 p-4 border-2 bg-gray-50 rounded-md">
                Product Items will added here
            </div>

            <div className="w-10/12 md:w-6/12 lg:h-5/12 p-4 border-2 bg-gray-50 rounded-md">
                <h1 className="font-bold mb-3 mt-2">Delivery Information</h1>
                <form className="w-full flex flex-col gap-8" onSubmit={handleUpdateUserProfile}>
                    <div className="flex flex-col md:flex-row w-full gap-2">
                        <div className="w-full md:w-1/2">
                            <Label className="font-bold my-4">Name</Label>
                            <Input
                                type="text"
                                placeholder="Enter Your Name"
                                className="text-sm"
                                required
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <Label className="font-bold my-4">Phone</Label>
                            <Input
                                type="text"
                                placeholder="Enter Your Phone Number"
                                className="text-sm"
                                required
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                            />
                        </div>
                    </div>


                    <div className="flex gap-2 justify-end items-center">
                        <Button onClick={handleCancel} type="button" className="">
                            cancel
                        </Button>
                        <Button type="submit">
                            Place Order
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Cart;