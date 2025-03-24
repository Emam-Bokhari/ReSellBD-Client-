"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  FieldValues,
} from "react-hook-form";
import { toast } from "sonner";
import {
  FaPhone,
  FaLocationDot,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Container from "@/components/shared/Container";
import { contactSchema } from "./contact.validation";
import { addContact } from "@/services/Contact";

export default function ContactUsForm() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      services: [],
    },
    resolver: zodResolver(contactSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await addContact(data);
      console.log(response);
      if (response?.success) {
        toast.success(
          "Thank you! Your message has been sent. We'll get back to you soon."
        );
        // form.reset()
      } else {
        toast.error(response.error[0]?.message);
      }
    } catch {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Container className="mt-4 mb-12">
      <div className="grid md:grid-cols-3 gap-8">
        {/* form section */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold">Contact our team</h2>
          <p className="text-gray-600">
            Got any questions about buying or selling products? We are here to
            help.
          </p>

          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4 mt-12">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        First name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="First name"
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Last name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Last name"
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="you@company.com"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        placeholder="+880 1XXX-XXXXXX"
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Message <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Leave us a message..."
                        className="w-full h-32"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Services</FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        {[
                          "Product Listing Assistance",
                          "Buyer & Seller Support",
                          "Account & Verification Help",
                          "Payment & Transaction Issues",
                          "Delivery & Logistics Support",
                          "Other",
                        ].map((service) => (
                          <div key={service} className="flex items-center">
                            <input
                              type="checkbox"
                              {...field}
                              value={service}
                              checked={field.value?.includes(service) ?? false}
                              onChange={() => {
                                const newValue = field?.value?.includes(service)
                                  ? field.value.filter(
                                      (item) => item !== service
                                    )
                                  : [...(field.value ?? []), service];
                                field.onChange(newValue);
                              }}
                              className="checkbox"
                            />
                            <span className="ml-2">{service}</span>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-4">
                <Button
                  type="submit"
                  className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending message..." : "Send message"}
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>

        {/* contact info section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Chat with us</h3>
            <p className="text-gray-600">
              Speak to our friendly team via live chat.
            </p>
            <div className="flex flex-col gap-2 mt-12">
              <Button
                variant="outline"
                className="flex items-center gap-2 cursor-pointer"
              >
                <a
                  href="https://wa.me/8801315773424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp /> Start a live chat with WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 cursor-pointer"
              >
                <a
                  href="mailto:moshfiqurrahman37@gmail.com"
                  className="flex items-center gap-2"
                >
                  <MdEmail /> Shoot us an email
                </a>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 cursor-pointer"
              >
                <a
                  href="https://www.linkedin.com/in/moshfiqur-rahman-a302b32a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaLinkedin /> Message us on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Call us</h3>
            <p className="text-gray-600">
              Call our team Mon-Fri from 9am to 6pm.
            </p>
            <p className="flex items-center gap-2 font-medium mt-2 text-[#F59E0B]">
              <FaPhone /> +880 13 15-77 3424
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Visit us</h3>
            <p className="text-gray-600">
              Visit us in person at our Dhaka office.
            </p>
            <p className="flex items-center gap-2 font-medium mt-2 text-[#F59E0B]">
              <FaLocationDot /> 25/B, Dhanmondi, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
