// @ts-nocheck
import Link from "next/link";
import Image from "next/image";

import { JoinNewsletterForm } from "@/components/form/join-newsletter-form";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { Shell } from "@/components/shell";
import { footerConfig, siteConfig } from "@/configs/site";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <Shell>
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <section
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
          >
            <Link href="/" className="flex w-fit items-center space-x-2">
              <Image
                src="/icon.svg"
                width={50}
                height={50}
                alt="logo"
                className="h-6 w-6"
              />
              <span className="font-bold">{siteConfig.name}</span>
              <span className="sr-only">Home</span>
            </Link>
          </section>
          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="grid flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4"
          >
            {footerConfig.footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-base font-medium">{item.title}</h4>
                <ul className="space-y-2.5">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        target={link?.external ? "_blank" : undefined}
                        rel={link?.external ? "noreferrer" : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section
            id="newsletter"
            aria-labelledby="newsletter-heading"
            className="space-y-3"
          >
            <h4 className="text-base font-medium">
              Subscribe to our newsletter
            </h4>
            <JoinNewsletterForm />
          </section>
        </section>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4"
        >
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            <div className="flex items-center">
              <Icons.location />
              <span className="ml-1">With love, from Nigeria</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <ModeToggle />
          </div>
        </section>
      </Shell>
    </footer>
  );
}
