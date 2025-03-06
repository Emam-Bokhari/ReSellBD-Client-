"use client";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import usaFlag from "@/assets/united-states.png";
import loveIcon from "@/assets/love.png";
import { Button } from "../ui/button";
import {
  Building2,
  HelpCircle,
  Home,
  LayoutDashboard,
  LogInIcon,
  LogOutIcon,
  Mail,
  Phone,
  ShoppingBag,
  User,
  UserCircle2,
  UserPlus,
} from "lucide-react";
import Container from "./Container";
import NavigationLink from "./NavigationLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { useUser } from "@/context/userContent";
import { Fragment } from "react";
import { logOut } from "@/services/Auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { user, setIsLoading } = useUser();

  const handleLogout = async () => {
    await logOut();
    setIsLoading(true);

    router.push("/");
  };

  return (
    <Container>
      <nav className="border-2 border-red-500 mt-4">
        <div className="flex lg:items-center gap-4 flex-col lg:flex-row lg:justify-between">
          {/* left side */}
          {/* logo */}
          <div className="border-2 border-blue-500">
            <Image src={logo} width={80} height={80} alt="Logo" />
          </div>

          {/* right side */}
          <div className="space-y-4">
            {/* contact info */}
            <div className="flex flex-col md:flex-row lg:items-center gap-2 md:gap-4">
              <p className="text-sm">
                <Phone size={18} className="inline text-[#F59E0B]" /> Contact:
                +880 131 577 3424
              </p>
              <p className="text-sm">
                <Mail size={18} className="inline text-[#F59E0B]" />{" "}
                support@resellbd.com
              </p>
              <div className="text-sm flex items-center gap-1">
                <Image src={usaFlag} width={25} height={25} alt="usa flag" />
                English
              </div>
            </div>

            {/* signin button */}
            <div className=" border-2 border-green-500 flex flex-col md:flex-row md:justify-end gap-2 md:gap-4">
              <Link href="/login" className="block ">
                <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937] cursor-pointer">
                  <LogInIcon size={18} />
                  SignIn With Your Account
                </Button>
              </Link>
              <Link href="/register" className="block ">
                <Button
                  variant="outline"
                  className="text-[#1F2937] cursor-pointer"
                >
                  <UserPlus size={18} />
                  Create A New Account
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-4  flex justify-end lg:justify-between">
          {/* menubar */}
          <ul className="hidden lg:flex gap-4 text-lg">
            <li>
              <NavigationLink route="Home" path="/" />
            </li>
            <li>
              <NavigationLink route="Products" path="/products" />
            </li>
            <li>
              <NavigationLink route="About Us" path="#" />
            </li>
            <li>
              <NavigationLink route="Contact Us" path="#" />
            </li>
            <li>
              <NavigationLink route="FAQs" path="#" />
            </li>
          </ul>

          {/* wishlist and profile */}
          <div className="flex items-center gap-4">
            <Link href="/wishlist">
              <Button variant="outline" className="cursor-pointer">
                <Image src={loveIcon} width={22} height={22} alt="wishlist" />
                Wishlist
              </Button>
            </Link>

            {/* profile dropdown visible for large devices */}
            {user && (
              <div className="hidden lg:flex">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="cursor-pointer">
                    <UserCircle2 size={28} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Link
                          href="#"
                          className="flex gap-2 text-base items-center "
                        >
                          <User className="w-6 h-6" />
                          Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-2 text-base"
                        >
                          <LayoutDashboard className="w-6 h-6" />
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <Separator />
                      <DropdownMenuItem onClick={handleLogout}>
                        <span className="flex gap-2 items-center text-base cursor-pointer">
                          <LogOutIcon className="w-6 h-6" />
                          Logout
                        </span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}

            {/* full dropdown visible for small devices */}
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="cursor-pointer">
                  <UserCircle2 size={28} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Explore</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        href="/"
                        className="flex gap-2 text-base items-center"
                      >
                        <Home className="w-6 h-6  " />
                        Home
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/profile"
                        className="flex gap-2 text-base items-center"
                      >
                        <User className="w-6 h-6  " />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="/products"
                        className="flex gap-2 text-base items-center"
                      >
                        <ShoppingBag className="w-6 h-6" />{" "}
                        {/* Browse Products */}
                        Products
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="#"
                        className="flex gap-2 text-base items-center"
                      >
                        <Building2 className="w-6 h-6" />
                        About Us
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="#"
                        className="flex gap-2 text-base items-center"
                      >
                        <Mail className="w-6 h-6" />
                        Contact Us
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        href="#"
                        className="flex gap-2 text-base items-center"
                      >
                        <HelpCircle className="w-6 h-6" />
                        FAQs
                      </Link>
                    </DropdownMenuItem>
                    {user && (
                      <Fragment>
                        <DropdownMenuItem>
                          <Link
                            href="/dashboard"
                            className="flex gap-2 text-base items-center"
                          >
                            <LayoutDashboard className="w-6 h-6" />
                            Dashboard
                          </Link>
                        </DropdownMenuItem>

                        <Separator />
                        <DropdownMenuItem>
                          <Link
                            href="#"
                            className="flex gap-2 text-base items-center"
                          >
                            <LogOutIcon className="w-6 h-6" />
                            Logout
                          </Link>
                        </DropdownMenuItem>
                      </Fragment>
                    )}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
}
