"use client"

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { authClient } from "../auth-client";

type GoogleText = {
    name: string;
}

const googleLogin = (text: GoogleText) => {
    const handleSignInWithGoogle = async () => {
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: `${process.env.NEXT_PUBLIC_APP_URL!}`,
            });
        } catch (err) {
            toast.error("Sign In unsuccessful. Try again later!");
            console.error(err);
        };
    }
    return (
        <Button onClick={() => handleSignInWithGoogle()} type="submit" className="w-full">
            {text.name}
        </Button>
    );
};

export default googleLogin;