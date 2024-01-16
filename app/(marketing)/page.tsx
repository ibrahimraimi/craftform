import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { cn } from "@/lib/utils";

export default function Component() {
  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <header className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <MenuIcon className="text-black h-6 w-6" />
          <h1 className="text-xl font-bold">Craftform</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
            href="#"
          >
            Solutions
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
            href="#"
          >
            Resources
          </Link>
          <Link
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
            href="#"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button className="text-sm" variant="ghost">
            <Link href="/signin" className="">
              Log In
            </Link>
          </Button>
          <Button className="text-sm" variant="default">
            Sign up
          </Button>
        </div>
      </header>
      <main className="mt-16 text-center">
        <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Crafting a refreshingly different form building experience!
        </h2>
        <p className="mt-6 text-lg text-gray-500 max-w-3xl mx-auto">
          Transform your data collection with Craftform – the innovative form
          builder that redefines your business. Bid adieu to dull forms and
          welcome a dynamic approach to glean valuable insights.
        </p>
        <Button className="mt-8" variant="default">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Get started — it's free
        </Button>
      </main>
    </div>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2_2715)">
        <rect y="-1" width="240" height="241" rx="40" fill="black" />
        <path
          d="M40 66.7778C40 56.9594 47.9594 49 57.7778 49H146.667C156.485 49 164.444 56.9594 164.444 66.7778C164.444 76.5962 156.485 84.5556 146.667 84.5556H57.7778C47.9594 84.5556 40 76.5962 40 66.7778Z"
          fill="white"
        />
        <path
          d="M40 120.111C40 110.293 47.9594 102.333 57.7778 102.333H182.222C192.041 102.333 200 110.293 200 120.111C200 129.929 192.041 137.889 182.222 137.889H57.7778C47.9594 137.889 40 129.929 40 120.111Z"
          fill="white"
        />
        <path
          d="M40 173.444C40 163.626 47.9594 155.667 57.7778 155.667H146.667C156.485 155.667 164.444 163.626 164.444 173.444C164.444 183.263 156.485 191.222 146.667 191.222H57.7778C47.9594 191.222 40 183.263 40 173.444Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_2715">
          <rect width="240" height="240" rx="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
