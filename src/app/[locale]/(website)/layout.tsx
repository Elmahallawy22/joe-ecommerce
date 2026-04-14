import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Providers from "@/components/providers";
import { Almarai } from "next/font/google";
import { setRequestLocale } from "next-intl/server";

// Load the Almarai font with the specified weights and subsets
const almarai = Almarai({
  subsets: ["latin"],
  variable: "--font-almarai",
  weight: ["300", "400", "700", "800"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${almarai.className} ${almarai.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
