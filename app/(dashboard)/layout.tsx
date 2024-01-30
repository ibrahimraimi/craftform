import { getCasheduser } from "@/lib/fetchers/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: React.PropsWithChildren) {
  const user = await getCasheduser();

  if (!user) {
    redirect("/signin");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main>{children}</main>
    </div>
  );
}
