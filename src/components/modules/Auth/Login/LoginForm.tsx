"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useRouter } from "next/navigation";

import { verifyToken } from "@/lib/verifyToken";
import { setUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";

export default function LoginForm() {
  const dispatch = useAppDispatch();

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
    setValue,
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    try {
      const response = await loginUser(data);

      if (response?.success) {
        toast.success(response?.message);
        const user = verifyToken(response.data?.token);

        dispatch(setUser({ user: user, token: response.data?.token }));
        router.push("/");
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wring!");
    }
  };

  // function to prefill the form for "User"
  const handleUserButtonClick = () => {
    setValue("identifier", "user@gmail.com");
    setValue("password", "user123");
  };

  // function to prefill the form for "Admin"
  const handleAdminButtonClick = () => {
    setValue("identifier", "admin@gmail.com");
    setValue("password", "admin123");
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
              <div className="flex flex-col gap-4 md:flex-row ">
                <Button
                  type="submit"
                  onClick={handleUserButtonClick}
                  className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white flex-1  "
                >
                  User
                </Button>
                <Button
                  type="submit"
                  onClick={handleAdminButtonClick}
                  className="cursor-pointer bg-orange-600 hover:bg-orange-700 text-white flex-1 "
                >
                  Admin
                </Button>
              </div>

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
