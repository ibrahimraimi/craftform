import { Skeleton } from "@/components/ui/skeleton";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shell";

export default function SignOutLoading() {
  return (
    <Shell className="max-w-md">
      <PageHeader className="text-center">
        <PageHeaderHeading>Sign out</PageHeaderHeading>
        <PageHeaderDescription>
          Are you sure you want to sign out?
        </PageHeaderDescription>
      </PageHeader>
      <div className="flex w-full items-center justify-center space-x-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </Shell>
  );
}
