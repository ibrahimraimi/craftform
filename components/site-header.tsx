import Link from "next/link";
import type { User } from "@clerk/nextjs/server";
import { DashboardIcon, ExitIcon, GearIcon } from "@radix-ui/react-icons";

import { siteConfig } from "@/configs/site";
import { getUserEmail } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

interface SiteHeaderProps {
  user: User | null;
}

export function SiteHeader({ user }: SiteHeaderProps) {
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;
  const email = getUserEmail(user);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user.imageUrl}
                        alt={user.username ?? ""}
                      />
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/stores">
                        <DashboardIcon
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        Dashboard
                        <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/billing">
                        <Icons.credit
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        />
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/account">
                        <GearIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/signout">
                      <ExitIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                      Log out
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="space-x-4">
                <Button variant="ghost">
                  <Link href="/signin" className="text-sm">
                    Log in
                  </Link>
                </Button>

                <Button variant="default">
                  <Link href="/signup" className="text-sm">
                    Sign up
                  </Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

// import { MainNav } from "@/components/main-nav";
// import { MobileNav } from "@/components/mobile-nav";
// import { Button } from "@/components/ui/button";
// import { getUserEmail } from "@/lib/utils";

// import type { User } from "@clerk/nextjs/server";
// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@radix-ui/react-dropdown-menu";
// import { DashboardIcon, ExitIcon, GearIcon } from "@radix-ui/react-icons";
// import Link from "next/link";
// import { Icons } from "./icons";
// import { DropdownMenuShortcut } from "./ui/dropdown-menu";

// interface SiteHeaderProps {
//   user: User | null;
// }

// export function SiteHeader({ user }: SiteHeaderProps) {
//   const initials = `${user?.firstName?.charAt(0) ?? ""} ${
//     user?.lastName?.charAt(0) ?? ""
//   }`;
//   const email = getUserEmail(user);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-14 max-w-screen-2xl items-center">
//         <MainNav />
//         <MobileNav />
//         <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
//           <div className="w-full flex-1 md:w-auto md:flex-none"></div>
//           <nav className="flex items-center space-x-2">
//             {user ? (
//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button
//                     variant="secondary"
//                     className="relative h-8 w-8 rounded-full"
//                   >
//                     <Avatar className="h-8 w-8">
//                       <AvatarImage
//                         src={user.imageUrl}
//                         alt={user.username ?? ""}
//                       />
//                       <AvatarFallback>{initials}</AvatarFallback>
//                     </Avatar>
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-56" align="end" forceMount>
//                   <DropdownMenuLabel className="font-normal">
//                     <div className="flex flex-col space-y-1">
//                       <p className="text-sm font-medium leading-none">
//                         {user.firstName} {user.lastName}
//                       </p>
//                       <p className="text-xs leading-none text-muted-foreground">
//                         {email}
//                       </p>
//                     </div>
//                   </DropdownMenuLabel>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuGroup>
//                     <DropdownMenuItem asChild>
//                       <Link href="/dashboard/stores">
//                         <DashboardIcon
//                           className="mr-2 h-4 w-4"
//                           aria-hidden="true"
//                         />
//                         Dashboard
//                         <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
//                       </Link>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem asChild>
//                       <Link href="/dashboard/billing">
//                         <Icons.credit
//                           className="mr-2 h-4 w-4"
//                           aria-hidden="true"
//                         />
//                         Billing
//                         <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//                       </Link>
//                     </DropdownMenuItem>
//                     <DropdownMenuItem asChild>
//                       <Link href="/dashboard/account">
//                         <GearIcon className="mr-2 h-4 w-4" aria-hidden="true" />
//                         Settings
//                         <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//                       </Link>
//                     </DropdownMenuItem>
//                   </DropdownMenuGroup>
//                   <DropdownMenuSeparator />
//                   <DropdownMenuItem asChild>
//                     <Link href="/signout">
//                       <ExitIcon className="mr-2 h-4 w-4" aria-hidden="true" />
//                       Log out
//                       <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//                     </Link>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             ) : (
//               <div className="space-x-4">
//                 <Button variant="ghost">
//                   <Link href="/signin" className="text-sm">
//                     Log in
//                   </Link>
//                 </Button>

//                 <Button variant="default">
//                   <Link href="/signup" className="text-sm">
//                     Sign up
//                   </Link>
//                 </Button>
//               </div>
//             )}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }
