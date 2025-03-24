import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FaPhone,
  FaLocationDot,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Container from "@/components/shared/Container";

export default function ContactUs() {
  return (
    <Container className="mt-4 mb-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* form section */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold">Contact our team</h2>
          <p className="text-gray-600">
            Got any questions about buying or selling products on ResellBD? We
            are here to help.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-12">
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
          </div>
          <Input type="email" placeholder="you@company.com" />
          <Input type="tel" placeholder="+880 1XXX-XXXXXX" />
          <Textarea placeholder="Leave us a message..." className="h-32" />

          {/* services */}
          <div className="grid grid-cols-2 gap-2">
            {[
              "Product Listing Assistance",
              "Buyer & Seller Support",
              "Account & Verification Help",
              "Payment & Transaction Issues",
              "Delivery & Logistics Support",
              "Other",
            ].map((service, index) => (
              <label key={index} className="flex items-center gap-2">
                <Checkbox id={service} />
                <span>{service}</span>
              </label>
            ))}
          </div>
          <Button className="w-full mt-4 bg-[#F59E0B] hover:bg-[#D97706] text-white cursor-pointer">
            Send message
          </Button>
        </div>

        {/* contact info section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Chat with us</h3>
            <p className="text-gray-600">
              Speak to our friendly team via live chat.
            </p>
            <div className="flex flex-col gap-2 mt-12">
              <Button
                variant="outline"
                className="flex items-center gap-2 cursor-pointer"
              >
                <a
                  href="https://wa.me/8801315773424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp /> Start a live chat with WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 cursor-pointer"
              >
                <a
                  href="mailto:moshfiqurrahman37@gmail.com"
                  className="flex items-center gap-2"
                >
                  <MdEmail /> Shoot us an email
                </a>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 cursor-pointer"
              >
                <a
                  href="https://www.linkedin.com/in/moshfiqur-rahman-a302b32a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin /> Message us on LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Call us</h3>
            <p className="text-gray-600">
              Call our team Mon-Fri from 9am to 6pm.
            </p>
            <p className="flex items-center gap-2 font-medium mt-2 text-[#F59E0B]">
              <FaPhone /> +880 13 15-77 3424
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Visit us</h3>
            <p className="text-gray-600">
              Visit us in person at our Dhaka office.
            </p>
            <p className="flex items-center gap-2 font-medium mt-2 text-[#F59E0B]">
              <FaLocationDot /> 25/B, Dhanmondi, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
