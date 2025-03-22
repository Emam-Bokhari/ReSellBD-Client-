import Image from "next/image";
import yellowShadeImage from "@/assets/yellow-shade-bg.jpg";
import { Edit3, Globe, Mail, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FaFacebook } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function UserProfile() {
  return (
    <div className="relative flex flex-col items-start">
      {/* Banner Image */}
      <div className="relative w-full h-[250px]">
        <Image
          src={yellowShadeImage}
          alt="Profile Banner Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Profile Image */}
      <div className="absolute top-[205px] left-6 w-[100px] h-[100px] rounded-full border-4 border-white shadow-lg overflow-hidden">
        <Image
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Text Section */}
      <div className="mt-16 pl-6">
        <p className="text-lg font-semibold">Moshfiqur Rahman</p>
        <div className="flex items-center gap-2 text-gray-600">
          <Mail size={18} />
          <span>moshfiqurrahman37@gmail.com</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          <User size={16} className="inline-block mr-1" />
          <span className="font-medium">Admin</span> •
          <span className="ml-1 text-green-600">Active</span>
        </p>
      </div>

      {/* Personal Details */}
      <Separator className="mt-4" />
      <div className=" p-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-2 gap-x-20 gap-y-2 text-gray-700">
          <p>
            <strong>Gender:</strong> Male
          </p>
          <p>
            <strong>City:</strong> Dhaka
          </p>
          <p>
            <strong>Address:</strong> 123 Street, Dhaka
          </p>
          <p>
            <strong>Postal Code:</strong> 1205
          </p>
          <p>
            <strong>Country:</strong> Bangladesh
          </p>
        </div>
      </div>

      {/* Social Links */}
      <Separator className="mt-4" />
      <div className=" p-6">
        <h3 className="text-lg font-semibold mb-4">Social Links</h3>
        <div className="flex gap-4 text-blue-600">
          <a
            href="https://facebook.com"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FaFacebook size={18} /> Facebook
          </a>
          <a
            href="https://example.com"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Globe size={18} /> Website
          </a>
        </div>
      </div>

      {/* Bio Section */}
      <Separator className="mt-4" />
      <div className=" p-6">
        <h3 className="text-lg font-semibold mb-2">Bio</h3>
        <p className="text-gray-700 text-sm">
          Passionate software engineer with expertise in web development, cloud
          solutions, and DevOps. Always learning and building awesome projects.
        </p>
      </div>
      {/* actions */}
      <Separator className="mt-4" />
      <div className="flex justify-end w-full p-6">
        <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-white cursor-pointer">
          <Edit3 size={18} />
          Update Profile
        </Button>
      </div>
    </div>
  );
}
