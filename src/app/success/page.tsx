import { Card } from "@/components/ui/card";
import Image from "next/image";
import successIcon from "@/assets/payment-success.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="p-4 w-[350px] md:w-[500px]">
        <Image
          src={successIcon}
          width={150}
          height={150}
          alt="Payment success icon"
          className="m-auto w-[100px] md:w-[150px]"
        />
        <div className="text-center space-y-1">
          <h2 className="text-lg font-medium">Your Payment Is Successful</h2>
          <p className="text-sm text-[#1F2937]">Thank your for your payment</p>
          <Link href="/" className="block">
            <Button
              variant="link"
              className="cursor-pointer underline text-sm lg:text-base hover:text-blue-500 "
            >
              Back To Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
