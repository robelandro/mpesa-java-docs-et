import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <Badge variant="secondary" className="rounded-full py-1 border-none">
          v1.1
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl md:leading-[1.2] font-bold">
          M-Pesa Java SDK
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          This project integrates with the <b>Mpesa API</b>, providing functionality to trigger payments, validate them, register payment notification URLs, and handle USSD push requests and other requests.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full text-base">
            <Link href="/docs">
              Get Started <ArrowUpRight className="!h-5 !w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
