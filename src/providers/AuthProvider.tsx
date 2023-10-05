"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

type Prop = {
    children: React.ReactNode;
};

const AuthProvider = ({ children }: Prop) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
