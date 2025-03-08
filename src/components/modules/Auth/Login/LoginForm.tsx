"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import appleLogo from "@/assets/apple.png";
import { Separator } from "@/components/ui/separator";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidation } from "./login.validation";
import { loginUser } from "@/services/Auth";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";

import { verifyToken } from "@/lib/verifyToken";
import { setUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function LoginForm() {
  const dispatch = useAppDispatch();

  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginValidation),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      const response = await loginUser(data);

      if (response?.success) {
        toast.success(response?.message);
        const user = verifyToken(response.data?.token);

        dispatch(setUser({ user: user, token: response.data?.token }));
        if (redirect) {
          router.push(redirect);
        } else {
          router.push("/");
        }
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wring!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md md:p-6 shadow-xl">
        <CardHeader>
          <CardTitle className=" text-xl lg:text-2xl font-bold text-center">
            Login to Your Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              <FormField
                control={form.control}
                name="identifier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email or Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your email or phone number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter your password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full mt-4 bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937] text-lg cursor-pointer"
              >
                {isSubmitting ? "Logging..." : "Login"}
              </Button>
            </form>
          </FormProvider>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
