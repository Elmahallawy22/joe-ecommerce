"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils/tailwind-merge";
import { useLocale, useTranslations } from "next-intl";

export default function TopHeader() {
  // translations
  const t = useTranslations("header");
  const locale = useLocale();

  // navigation hooks
  const router = useRouter();
  const pathname = usePathname();

  function toggleLocale(value: string) {
    // Toggle between 'ar' and 'en'
    router.push(
      {
        pathname,
        query: Object.fromEntries(new URLSearchParams(location.search).entries()),
      },
      {
        locale: locale === value ? "" : value,
      }
    );
  }

  return (
    <div className="md:bg-lightGray-100 flex justify-center py-1 px-1">
      <div className="container flex justify-between">
        <ul className="flex items-center gap-2">
          <li>
            <button
              className={cn("text-xs cursor-pointer", locale === "en" && "text-red-500")}
              onClick={() => toggleLocale("en")}
            >
              English{" "}
            </button>
          </li>
          <li className="text-yellowCustom-100">|</li>
          <li>
            <button
              className={cn("text-xs cursor-pointer", locale === "ar" && "text-red-500")}
              onClick={() => toggleLocale("ar")}
            >
              العربية
            </button>
          </li>
        </ul>
        <h6 className="text-sm text-red-500">{t("offer")}</h6>
      </div>
    </div>
  );
}
