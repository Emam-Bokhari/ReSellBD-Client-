"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addNewsLetter = async (newsLetterData: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/newsLetters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsLetterData),
    });
    revalidateTag("NEWSLETTER");

    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllNewsLetters = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/newsLetters`,
      {
        next: {
          tags: ["NEWSLETTER"],
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
    throw new Error(error);
  }
};
