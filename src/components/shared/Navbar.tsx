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
  Mail,
  Phone,
  ShoppingBag,
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

export default function Navbar() {
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
                resellbd@gmail.com
              </p>
              <div className="text-sm flex items-center gap-1">
                <Image src={usaFlag} width={25} height={25} alt="usa flag" />
                English
              </div>
            </div>

            {/* signin button */}
            <div className=" border-2 border-green-500 flex flex-col md:flex-row md:justify-end gap-2 md:gap-4">
              <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937]">
                <LogInIcon size={18} />
                SignIn With Your Account
              </Button>
              <Button variant="outline" className="text-[#1F2937]">
                <UserPlus size={18} />
                Create A New Account
              </Button>
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
              <NavigationLink route="Browse Products" path="#" />
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
            <Button variant="outline">
              <Image src={loveIcon} width={22} height={22} alt="wishlist" />
              Wishlist
            </Button>
            {/* Hamburger Menu for small devices */}
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <UserCircle2 size={28} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Explore</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href="/" className="flex gap-2">
                        <Home className="w-4 h-4  " />
                        Home
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" className="flex gap-2">
                        <ShoppingBag className="w-4 h-4" />{" "}
                        {/* Browse Products */}
                        Browse Products
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" className="flex gap-2">
                        <Building2 className="w-4 h-4" />
                        About Us
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" className="flex gap-2">
                        <Mail className="w-4 h-4" />
                        Contact Us
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#" className="flex gap-2">
                        <HelpCircle className="w-4 h-4" />
                        FAQs
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/dashboard" className="flex gap-2">
                        <LayoutDashboard className="w-4 h-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
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
