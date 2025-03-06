"use client";
import { UserProvider } from "@/context/userContent";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}
