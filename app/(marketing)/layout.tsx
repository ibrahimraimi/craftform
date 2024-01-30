import { currentUser } from "@clerk/nextjs";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

interface MarketingLayoutProps
  extends React.PropsWithChildren<{
    modal: React.ReactNode;
  }> {}

export default async function MarketingLayout({
  children,
  modal,
}: MarketingLayoutProps) {
  const user = await currentUser();

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">
        {children}
        {modal}
      </main>
      <SiteFooter />
    </div>
  );
}
