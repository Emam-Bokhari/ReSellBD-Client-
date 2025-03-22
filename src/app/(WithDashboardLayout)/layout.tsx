import { AppSidebar } from "@/components/app-sidebar";
import DynamicBreadcrumb from "@/components/shared/Dashboard/DynamicBreadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { LogOutIcon, User } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

export const ProfileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Link href="/profile" className="flex gap-2 text-base items-center ">
            <User className="w-6 h-6" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="flex gap-2 items-center text-base cursor-pointer">
            <LogOutIcon className="w-6 h-6" />
            Logout
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center border-b px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <DynamicBreadcrumb />
            </div>

            {/* Profile Icon - Right Side */}
            <div className="ml-auto flex gap-2">
              <ProfileMenu />
              <div>
                <p className="text-sm text-[#1F2937] font-semibold">
                  Moshfiqur Rahman
                </p>
                <p className="text-xs text-gray-500">
                  moshfiqurrahman37@gmail.com
                </p>
              </div>
            </div>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </Fragment>
  );
}
