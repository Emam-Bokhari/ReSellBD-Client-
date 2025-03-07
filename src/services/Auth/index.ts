"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldValues } from "react-hook-form";


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


        return result;
    } catch (error: any) {
        return Error(error)
    }
}

