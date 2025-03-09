// export const getMe = async (token: string) => {
//     try {
//         if (!token) {
//             throw new Error("No token found");
//         }
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/me`, {
//             method: "GET",
//             headers: {
//                 "Authorization": token
//             },
//         })

//         const data = await res.json()
//         return data;
//     } catch (error: any) {
//         throw new Error(error)
//     }
// }