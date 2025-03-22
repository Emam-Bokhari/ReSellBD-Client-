"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Link from "next/link";

export default function NewsletterSection() {
  const form = useForm({
    defaultValues: {
      email: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <section className="w-full  mt-4 px-4 md:px-10 lg:px-20 flex justify-center items-center">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-xl font-bold text-[#1F2937] mb-4">
          JOIN OUR NEWSLETTER NOW
        </h2>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-end gap-4 justify-center">
              <div className="flex-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-800">
                        Your Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your email address"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1F2937] cursor-pointer "
                type="submit"
                disabled={isSubmitting}
              >
                SIGN UP
              </Button>
            </div>
          </form>
        </FormProvider>
        <p className="text-sm text-gray-600 mt-2">
          Will be used in accordance with our{" "}
          <Link
            href="#"
            className="font-semibold text-gray-800 hover:underline "
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </section>
  );
}
