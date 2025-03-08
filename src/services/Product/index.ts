"use server"

import { revalidateTag } from "next/cache";



export const getAllProducts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
            next: {
                tags: ["PRODUCT"]
            }
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getProductById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`, {
            next: {
                tags: ["PRODUCT"]
            }
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const addProduct = async (productData: any, token: string) => {
    try {
        if (!token) {
            throw new Error("No token found");
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(productData),
        })
        revalidateTag("PRODUCT");

        const data = await res.json()
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const updateProductById = async (id: string, updatedProductData: any, token: string) => {
    try {
        if (!token) {
            throw new Error("No token found!");
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            },
            body: JSON.stringify(updatedProductData)
        })
        revalidateTag("PRODUCT");
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const updateProductStatusById = async (id: string, status: any, token: string) => {
    try {
        if (!token) {
            throw new Error("No token found!")
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}/status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            },
            body: JSON.stringify(status)
        })
        revalidateTag("PRODUCT");
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const deleteProductById = async (id: string, token: string) => {
    try {
        if (!token) {
            throw new Error("No token found!")
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            },
        })
        revalidateTag("PRODUCT");
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}