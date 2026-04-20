import TitleSection from "@/components/shared/title-section";
import { Link } from "@/i18n/navigation";
import { MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function NewArrivedSection() {
  // translation
  const t = useTranslations("home.new-arrivals");

  return (
    <section>
      {/* title of section */}
      <TitleSection title={t("title")} link={t("link")} href="/" />
      {/* new arrivals products */}
      <div className="grid grid-cols-12 gap-1 sm:gap-2 h-32 sm:h-44 md:h-48 lg:h-64 xl:h-80">
        {/* brand new arrivals */}
        <div className="col-span-4 md:col-span-3 bg-[url(/assets/new_brands.png)] bg-cover flex flex-col justify-end items-center gap-1 pb-2 md:pb-5">
          <p className="text-white font-bold text-xs md:text-base">{t("new-brands")}</p>
          <h5 className="text-red-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">{t("new-arrived")}</h5>
          <Link href="" className="flex items-center gap-1 text-white font-extrabold text-xs md:text-base">
            {t("shop-now")}
            <MoveRight className="rtl:rotate-180" />
          </Link>
        </div>
        {/* women new arrivals */}
        <div className="col-span-4 md:col-span-6 bg-[url(/assets/new_women.png)] bg-cover flex flex-col justify-end items-center gap-1 pb-2 md:pb-5">
          <p className="text-white font-bold text-xs md:text-base">{t("new-women")}</p>
          <h5 className="text-red-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">{t("new-arrived")}</h5>
          <Link href="" className="flex items-center gap-1 text-white font-extrabold text-xs md:text-base">
            {t("shop-now")}
            <MoveRight className="rtl:rotate-180" />
          </Link>
        </div>
        {/* mobile new arrivals */}
        <div className="col-span-4 md:col-span-3 bg-[url(/assets/new_mobiles.png)] bg-cover flex flex-col justify-end items-center gap-1 pb-2 md:pb-5">
          <p className="text-white font-bold text-xs md:text-base">{t("new-mobiles")}</p>
          <h5 className="text-red-600 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">{t("new-arrived")}</h5>
          <Link href="" className="flex items-center gap-1 text-white font-extrabold text-xs md:text-base">
            {t("shop-now")}
            <MoveRight className="rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
