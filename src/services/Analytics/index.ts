"use server"
import { cookies } from "next/headers";

export const getTotalProductsAdded = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/analytics/total-products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": (await cookies()).get("accessToken")!.value
            }
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}