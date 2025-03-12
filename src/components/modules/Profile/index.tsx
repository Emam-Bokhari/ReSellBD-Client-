"use client";
import { Card, CardContent } from "@/components/ui/card";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import Image from "next/image";
import Container from "@/components/shared/Container";
import personalSiteLogo from "@/assets/personal.png";
import facebookLogo from "@/assets/facebook.png";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IUser } from "@/types";
import { useState } from "react";
import ProfileModal from "./ProfileModal";

export default function Profile({ profileData }: { profileData: IUser }) {
  const [profile, setProfile] = useState(profileData);

  const handleSave = async (updatedProfile: any) => {
    setProfile(updatedProfile);
  };

  return (
    <Container className="mt-8 flex justify-center">
      <Card className="w-full p-6 bg-white rounded-2xl shadow-lg">
        <CardContent className="p-6 space-y-6">
          {/* profile picture */}
          <div className="flex justify-center">
            {profile?.profilePicture ? (
              <Image
                src={profile.profilePicture}
                alt="Profile"
                width={100}
                height={100}
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <Avatar className="w-28 h-28">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Default Avatar"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            )}
          </div>

          {/* name & bio */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              {profile?.name || "Your Name"}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {profile?.bio || "Add a short bio about yourself."}
            </p>
          </div>

          {/* location & gender */}
          <div className="bg-gray-100 p-4 rounded-lg text-gray-600 space-y-2">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <p>
                {profile?.country || "Country not set"},{" "}
                {profile?.city || "City not set"}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaUser className="text-green-500" />
              <p>{profile?.gender || "Gender not specified"}</p>
            </div>
          </div>

          {/* social links */}
          <div className="flex flex-col gap-3 text-gray-700">
            <div className="flex items-center space-x-2">
              <Image src={personalSiteLogo} width={30} height={30} alt="Site" />
              {profile?.website ? (
                <Link href={profile.website} className="text-blue-600">
                  Personal Site
                </Link>
              ) : (
                <p className="text-gray-400">No personal site added</p>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Image src={facebookLogo} width={30} height={30} alt="Facebook" />
              {profile?.facebook ? (
                <Link href={profile.facebook} className="text-blue-600">
                  Facebook Profile
                </Link>
              ) : (
                <p className="text-gray-400">No Facebook link added</p>
              )}
            </div>
          </div>

          {/* update button */}
          <div className="flex justify-center">
            <div className="flex justify-center">
              <ProfileModal profile={profile} onSave={handleSave} />
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
