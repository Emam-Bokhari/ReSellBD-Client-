"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { IUser } from "@/types";
import { updateProfile } from "@/services/User";
import { Edit3 } from "lucide-react";

export default function ProfileModal({
  profile,
  onSave,
}: {
  profile: IUser;
  onSave: (updateProfile: any) => void;
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: profile?.name || "",
    identifier: profile?.identifier || "",
    profilePicture: profile?.profilePicture || "",
    city: profile?.city || "",
    address: profile?.address || "",
    postalCode: profile?.postalCode || "",
    country: profile?.country || "",
    gender: profile?.gender || "",
    bio: profile?.bio || "",
    facebook: profile?.facebook || "",
    website: profile?.website || "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenderChange = (value: "male" | "female") => {
    setFormData({ ...formData, gender: value || "male" });
  };

  const handleSubmit = async () => {
    // url validation function
    const isValidURL = (url: string) => {
      if (!url) return true;
      const regex = /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/\S*)?$/i;
      return regex.test(url);
    };

    // Validate all URLs: profilePicture, facebook, website
    if (
      !isValidURL(formData.profilePicture) ||
      !isValidURL(formData.facebook) ||
      !isValidURL(formData.website)
    ) {
      toast.error(
        "Please enter valid URLs for Profile Picture, Facebook, and Website!"
      );
      return;
    }

    try {
      const data = await updateProfile(formData);

      if (data?.success) {
        toast.success("Your Profile updated successfully");
      } else {
        toast.error(data?.error[0]?.message);
      }
    } catch {
      toast.error("Something went wring!");
    }

    onSave(formData);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#F59E0B] hover:bg-[#D97706] text-white cursor-pointer">
          <Edit3 size={18} /> Update Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] md:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="mb-4 text-lg md:text-xl">
            Update Profile
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Responsive 2-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Profile Picture URL</Label>
              <Input
                name="profilePicture"
                value={formData.profilePicture}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>City</Label>
              <Input
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Address</Label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Postal Code</Label>
              <Input
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Country</Label>
              <Input
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Gender</Label>
              <Select
                onValueChange={handleGenderChange}
                value={formData.gender}
                defaultValue="male"
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Facebook</Label>
              <Input
                name="facebook"
                type="url"
                value={formData.facebook}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Website</Label>
              <Input
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            {/* Bio Section - Full Width */}
            <div className="space-y-2 md:col-span-2">
              <Label>Bio</Label>
              <Textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            className="w-full mt-4 bg-[#F59E0B] hover:bg-[#D97706] text-white cursor-pointer"
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
