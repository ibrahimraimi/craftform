"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/configs/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/solutions"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Solutions
        </Link>
        <Link
          href="/resources"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Resources
        </Link>
        <Link
          href="/pricing"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Pricing
        </Link>
        <Link
          href="/templates"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Templates
        </Link>
      </nav>
    </div>
  );
}
