import ToggleLanguage from "@/components/features/toggle-language";
import { RouteProps } from "@/lib/types/global";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: RouteProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("home"),
  };
}

export default function Home() {
  const t = useTranslations();

  return (
    <main className="">
      <ToggleLanguage />
      <div className="">{t("home")}</div>
    </main>
  );
}
