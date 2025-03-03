"use client";

import Image from "next/image";
import logo from "@/assets/Logo.png";
import usaFlag from "@/assets/united-states.png";
import { Button } from "../ui/button";
import { LogInIcon, Mail, Phone, UserPlus } from "lucide-react";
import Container from "./Container";

export default function Navbar() {
  return (
    <Container>
      <nav className="border-2 border-red-500">
        {/* left side */}
        <div className="flex lg:items-center gap-4 flex-col lg:flex-row lg:justify-between">
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
      </nav>
    </Container>
  );
}
