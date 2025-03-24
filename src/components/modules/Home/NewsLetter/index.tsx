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
import { addNewsLetter } from "@/services/NewsLetter";
import { toast } from "sonner";

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
    try {
      const response = await addNewsLetter(data);
      if (response?.success) {
        toast.success(
          "📩 You’re subscribed! Expect great updates in your inbox"
        );
        form.reset();
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wrong!");
    }
  };

  return (
    <section
      className="w-full my-12 px-4 py-10   flex justify-center items-center relative bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dvpqm6zct/image/upload/v1742832907/news-letter-banner_wbmj9p.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      {/* Overlay */}
      <div className="max-w-2xl w-full text-center relative z-10">
        <h2 className="text-xl font-bold text-white mb-4">
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
                      <FormLabel className="text-gray-200">
                        Your Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your email address"
                          className="text-white"
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
                Subscribe
              </Button>
            </div>
          </form>
        </FormProvider>
        <p className="text-sm text-gray-300 mt-2">
          Subscribe now and never miss an update.
        </p>
      </div>
    </section>
  );
}
