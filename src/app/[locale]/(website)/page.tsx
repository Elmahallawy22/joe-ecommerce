import { RouteProps } from "@/lib/types/global";
import { getTranslations } from "next-intl/server";
import HeroSection from "./_components/hero-section";
import CategoriesSection from "./_components/categories-section";
import NewArrivedSection from "./_components/new-arrived-section";
import FlashStyleSection from "./_components/flash-style-section";

export async function generateMetadata({ params }: RouteProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("home.page-title"),
    description: t("home.page-description"),
  };
}

export default function Home() {
  return (
    <main className="py-5 md:py-9 space-y-6 md:space-y-12">
      <HeroSection />
      <CategoriesSection />
      <NewArrivedSection />
      <FlashStyleSection />
    </main>
  );
}
