"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */


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

        const data = await res.json()
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getAllProducts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`);
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

// export const getProductsBySpecificUser = async (token: string) => {
//     try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/byUser`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": { token }
//             }
//         })
//         const data = res.json();
//         return data;

//     } catch (error: any) {
//         throw new Error(error)
//     }
// }

export const getProductById = async (id: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`);
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}