import logo from "@/assets/Logo.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { getCurrentUser } from "@/services/Auth";

const data = {
  navMain: [
    {
      title: "Applications",
      items: [{ title: "Home", url: "/user/dashboard" }],
    },
    {
      title: "Products",
      items: [
        { title: "Products", url: "/user/dashboard/products" },
        { title: "Add Product", url: "/user/dashboard/products/add-product" },
      ],
    },
    {
      title: "History",
      items: [
        {
          title: "Purchases History",
          url: "/user/dashboard/orders/purchase-history",
        },
        { title: "Sales History", url: "/user/dashboard/orders/sales-history" },
      ],
    },
  ],
  adminNav: [
    {
      title: "Users",
      items: [{ title: "Users", url: "/admin/dashboard/users" }],
    },
    {
      title: "Contacts",
      items: [
        { title: "Contacts", url: "/admin/dashboard/contacts" },
        {
          title: "Newsletters",
          url: "/admin/dashboard/newsLetters",
        },
      ],
    },
  ],
};

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const user = await getCurrentUser();
  const isAdmin = user?.role === "admin"; // Check if user is admin

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <Image src={logo} width={35} height={35} alt="logo" />
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">ReSellBD</span>
                  <span>New Deals, Endless Possibilities</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {[...data.navMain, ...(isAdmin ? data.adminNav : [])].map(
              (item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <span className="font-medium">{item.title}</span>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.url}>{subItem.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              )
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
