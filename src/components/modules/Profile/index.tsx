import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";
import Image from "next/image";
import Container from "@/components/shared/Container";
import personalSiteLogo from "@/assets/personal.png";
import facebookLogo from "@/assets/facebook.png";
import Link from "next/link";

export default function Profile() {
  return (
    <Container className="mt-8 flex justify-center">
      <Card className="w-full p-6 bg-white rounded-2xl shadow-lg">
        <CardContent className="p-6 space-y-4">
          {/* profile picture */}
          <div className="flex place-content-center">
            <Image
              src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Profile"
              width={100}
              height={100}
              className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* name  */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-500 text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              minima facere dicta eum sequi, facilis similique, libero maxime
              quae saepe ab. Perferendis nesciunt, voluptatem facere error quas
              similique unde, corrupti est doloribus, soluta qui commodi nulla!
              Nihil animi, earum quidem delectus temporibus similique quasi
              corporis voluptatem dolore provident, atque accusantium?
            </p>
          </div>

          {/* location & gender */}
          <div className="bg-gray-100 p-4 rounded-lg text-gray-600 space-y-2">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <p>Bangladesh, Brahmanbaria</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaUser className="text-green-500" />
              <p>Male</p>
            </div>
          </div>

          {/* social link*/}
          <div className="flex gap-4 text-gray-700">
            <Link href="#" className="block">
              <div className="flex items-center space-x-2">
                <Image
                  src={personalSiteLogo}
                  width={30}
                  height={30}
                  alt="Personal site icon"
                />
                <p>Personal Site</p>
              </div>
            </Link>
            <Link href="#" className="block">
              <div className="flex items-center space-x-2">
                <Image
                  src={facebookLogo}
                  width={30}
                  height={30}
                  alt="Facebook icon"
                />
                <p>Facebook</p>
              </div>
            </Link>
          </div>

          {/* update button */}
          <div className="flex justify-center">
            <Button className="bg-[#F59E0B] hover:bg-[#D97706] cursor-pointer text-white ">
              Update Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
