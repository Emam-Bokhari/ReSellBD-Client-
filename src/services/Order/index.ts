"use server"

export const addOrder = async (orderData: any, token: string) => {
    try {
        if (!token) {
            throw new Error("No token found");
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(orderData),
        })

        const data = await res.json()
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const updateOrderStatusById = async (id: string, status: any, token: string) => {
    try {
        if (!token) {
            throw new Error("No token found!")
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/transactions/${id}/status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
            },
            body: JSON.stringify(status)
        })
        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error)
    }
}