import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Container from "./Container";
import Image from "next/image";
import logo from "@/assets/Logo_Black.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <Container>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* brand section */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">ResellBD</h2>
            <Image src={logo} width={80} height={80} alt="logo" />
            <p className="text-gray-400">
              Elevating your reselling experience with trust & excellence.
            </p>
          </div>

          {/* quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-[#F59E0B] duration-150 transition "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#F59E0B] duration-150 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#F59E0B] duration-150 transition"
                >
                  Browse Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#F59E0B] duration-150 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <p className="text-gray-400">Email: support@resellbd.com</p>
            <p className="text-gray-400">Phone: +880 1234 567890</p>
            <p className="text-gray-400">Dhaka, Bangladesh</p>
          </div>

          {/* social icons */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-blue-400 transition duration-150"
              >
                <Facebook />
              </Link>
              <Link
                href="#"
                className="hover:text-blue-500 transition duration-150"
              >
                <Twitter />
              </Link>
              <Link
                href="#"
                className="hover:text-pink-500 transition duration-150"
              >
                <Instagram />
              </Link>
              <Link
                href="#"
                className="hover:text-blue-600 transition duration-150"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* copyright section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} ResellBD. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
