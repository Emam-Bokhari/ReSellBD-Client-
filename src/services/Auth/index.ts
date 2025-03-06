"use server"
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const registerUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error)
    }
}

export const loginUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const result = await res.json();

        // set access token in the browser cookie
        const storeCookies = await cookies();
        if (result?.success) {
            storeCookies.set("accessToken", result?.data?.token)
        }
        return result;
    } catch (error: any) {
        return Error(error)
    }
}

export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value;
    let decodedData = null;

    if (accessToken) {
        decodedData = await jwtDecode(accessToken);
        return decodedData;
    } else {
        return null;
    }
};




export const logOut = async () => {
    (await cookies()).delete("accessToken")
}