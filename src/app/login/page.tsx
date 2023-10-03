import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

const Login = () => {
    return (
        <div className="h-[calc(100vh_-_110px)] flex items-center justify-center">
            <div className="h-[400px] w-[400px] rounded-md border-2 border-[hsl(var(--foreground))] flex flex-col items-center gap-12 justify-center px-4">
                <div className="flex flex-col items-center gap-2">
                    <h1 className="text-3xl font-bold">Welcome to GapShap</h1>
                    <p>Login/Register</p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 rounded-md border-2 px-4 py-2 hover:bg-red-500 cursor-pointer hover:border-red-500 hover:text-[hsl(var(--background))]">
                        <GoogleIcon />
                        Google
                    </div>
                    <div className="flex items-center gap-2 rounded-md border-2 px-4 py-2 hover:bg-black cursor-pointer hover:border-black hover:text-[hsl(var(--background))]">
                        <GitHubIcon />
                        Google
                    </div>
                </div>
                <div className="px-2 text-justify">
                    By signing in you agree to <strong> terms and condition</strong> of gapshap
                </div>
            </div>
        </div>
    );
};

export default Login;
