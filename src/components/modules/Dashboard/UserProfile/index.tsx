"use client";
import Image from "next/image";
import yellowShadeImage from "@/assets/yellow-shade-bg.jpg";
import { Globe, Mail, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { FaFacebook } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { IUser } from "@/types";
import { useState } from "react";
import Link from "next/link";
import ProfileModal from "./ProfileModal";

export default function UserProfile({ profileData }: { profileData: IUser }) {
  const [profile, setProfile] = useState(profileData);
  const handleSave = async (updatedProfile: any) => {
    setProfile(updatedProfile);
  };
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
      {profile?.profilePicture ? (
        <div className="absolute top-[205px] left-6 w-[100px] h-[100px] rounded-full border-4 border-white shadow-lg overflow-hidden">
          <Image
            src={profile?.profilePicture}
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      ) : (
        <div className="absolute top-[205px] left-6 w-[100px] h-[100px] rounded-full border-4 border-white shadow-lg overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dvpqm6zct/image/upload/v1742736505/user_ug5gxm.png"
            alt="Profile Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      {/* Text Section */}
      <div className="mt-16 pl-6">
        <p className="text-lg font-semibold">{profile?.name || "User"}</p>
        <div className="flex items-center gap-2 text-gray-600">
          <Mail size={18} />
          <span>{profile?.identifier}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          <User size={16} className="inline-block mr-1" />
          <span className="font-medium capitalize">{profile?.role}</span> •
          <span className="ml-1 text-green-600 capitalize">
            {profile?.status}
          </span>
        </p>
      </div>

      {/* Personal Details */}
      <Separator className="mt-4" />
      <div className=" p-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-2 gap-x-20 gap-y-2 text-gray-700">
          <p>
            <strong>Gender:</strong> {profile?.gender || "Gender not specified"}
          </p>
          <p>
            <strong>City:</strong> {profile?.city || "City not set"}
          </p>
          <p>
            <strong>Address:</strong> {profile?.address || "Address not set"}
          </p>
          <p>
            <strong>Postal Code:</strong>{" "}
            {profile?.postalCode || "Postal code not set"}
          </p>
          <p>
            <strong>Country:</strong> {profile?.country || "Country not set"}
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
            <FaFacebook size={18} />
            {profile?.facebook ? (
              <Link href={profile.facebook}>Facebook</Link>
            ) : (
              <p className="text-gray-400">No Facebook link added</p>
            )}
          </a>
          <a
            href="https://example.com"
            target="_blank"
            className="flex items-center gap-2"
          >
            <Globe size={18} />{" "}
            {profile?.website ? (
              <Link href={profile.website} className="text-blue-600">
                Website
              </Link>
            ) : (
              <p className="text-gray-400">No personal site added</p>
            )}
          </a>
        </div>
      </div>

      {/* Bio Section */}
      <Separator className="mt-4" />
      <div className=" p-6">
        <h3 className="text-lg font-semibold mb-2">Bio</h3>
        <p className="text-gray-700 text-sm">
          {profile?.bio || "Add a short bio about yourself."}
        </p>
      </div>
      {/* actions */}
      <Separator className="mt-4" />
      <div className="flex justify-end w-full p-6">
        <div className="bg-[#F59E0B] hover:bg-[#D97706] text-white cursor-pointer rounded-lg">
          <ProfileModal profile={profile} onSave={handleSave} />
        </div>
      </div>
    </div>
  );
}
