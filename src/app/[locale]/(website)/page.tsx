import { RouteProps } from "@/lib/types/global";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: RouteProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("home"),
  };
}

export default function Home() {

  return (
    <main className="">
    </main>
  );
}
