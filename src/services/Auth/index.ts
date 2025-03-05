import { FieldValues } from "react-hook-form";

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