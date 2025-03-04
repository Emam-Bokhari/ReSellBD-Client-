import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import appleLogo from "@/assets/apple.png";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md md:p-6 shadow-xl">
        <CardHeader>
          <CardTitle className=" text-xl lg:text-2xl font-bold text-center">
            Login to Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Button type="submit" className="w-full cursor-not-allowed">
              <Image
                src={appleLogo}
                width={22}
                height={22}
                className="invert mr-1"
                alt="apple logo"
              />
              Continue with Apple
            </Button>
            <Separator />
            <p className="text-center mt-0 text-[#989BA4]">or Login with</p>
            <div>
              <Label htmlFor="identifier">Email or Phone Number</Label>
              <Input
                id="identifier"
                type="text"
                placeholder="Enter your email or phone number"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1"
              />
            </div>
            <Button
              type="submit"
              className="w-full mt-4 bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937] text-lg"
            >
              Login
            </Button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
