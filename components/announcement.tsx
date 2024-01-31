import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { Separator } from "@/components/ui/separator";

export function Announcement() {
  return (
    <div className="mb-4 flex">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex"
      >
        <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
            New form fields ⚡️
            <span className="inline-flex items-center pl-2 text-black dark:text-white">
              Read more{" "}
              <ArrowRightIcon
                className="pl-0.5 text-black dark:text-white"
                // size={16}
              />
            </span>
          </div>
        </span>
      </a>
    </div>
  );
}

// <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//   <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//   <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
//     Border Magic
//   </span>
// </button>;
