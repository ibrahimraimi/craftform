"use client";

import Link from "next/link";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Announcement } from "@/components/announcement";

export default function IndexPage() {
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>
          <span className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Crafting a refreshingly different form building experience!
          </span>
        </PageHeaderHeading>
        <PageHeaderDescription>
          Transform your data collection with Craftform – the innovative form
          builder that redefines your business. Bid adieu to dull forms and
          welcome a dynamic approach to glean valuable insights.
        </PageHeaderDescription>
        <PageActions>
          <Link href="/builder" className={cn(buttonVariants())}>
            Get started — it&apos;s free
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  );
}
