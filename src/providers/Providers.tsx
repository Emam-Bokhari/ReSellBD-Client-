"use client";
import { UserProvider } from "@/context/userContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}
