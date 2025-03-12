"use server"
import { cookies } from "next/headers";

export const getMe = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/me`, {
            method: "GET",
            headers: {
                "Authorization": (await cookies()).get("accessToken")!.value
            },
        })
        const data = await res.json()
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const updateProfile = async (updatedData: any) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/users/update-profile`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: (await cookies()).get("accessToken")!.value,
                },
                body: JSON.stringify(updatedData),
            }
        );
        const data = await response.json();

        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

