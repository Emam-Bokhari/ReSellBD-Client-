"use server"
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllProducts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
            next: {
                tags: ["PRODUCT"],
                revalidate: 30,
            }
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getProductsByCategory = async (category: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/category/${category}`, {
            next: {
                tags: ["PRODUCT"],
                revalidate: 30,
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
            cache: "no-store",
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


export const getProductsByUser = async () => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/listings/byUser`,
            {
                next: {
                    tags: ["PRODUCT"],
                    revalidate: 30,
                },
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: (await cookies()).get("accessToken")!.value,
                },
            }
        );

        const data = await response.json();

        return data;


    } catch (error: any) {
        throw new Error(error)
    }
};



export const addProduct = async (productData: any,) => {
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": (await cookies()).get("accessToken")!.value
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

export const updateProductById = async (id: string, updatedProductData: any) => {
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": (await cookies()).get("accessToken")!.value,
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

export const updateProductStatusById = async (id: string, status: any) => {
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}/status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": (await cookies()).get("accessToken")!.value,
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

export const deleteProductById = async (id: string) => {
    try {

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": (await cookies()).get("accessToken")!.value,
            },
        })
        revalidateTag("PRODUCT");
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}