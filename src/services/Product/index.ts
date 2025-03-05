/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

export const getAllProducts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`);
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error)
    }
}

export const getProductById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`);
        const data = await res.json();
        return data;
    } catch (error: any) {
        return Error(error)
    }
}