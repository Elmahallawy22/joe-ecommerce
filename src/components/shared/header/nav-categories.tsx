import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NavCategories() {
  // translations
  const t = useTranslations("header");

  // variables
  const navList = [
    { id: 1, name: t("women"), link: "/category/women" },
    { id: 2, name: t("men"), link: "/category/men" },
    { id: 3, name: t("children"), link: "/category/children" },
    { id: 4, name: t("beauty"), link: "/category/beauty" },
    { id: 5, name: t("sports"), link: "/category/sports" },
    { id: 6, name: t("home"), link: "/category/home" },
    { id: 7, name: t("electronics"), link: "/category/electronics" },
    { id: 8, name: t("shoes"), link: "/category/shoes" },
    { id: 9, name: t("bags"), link: "/category/bags" },
    { id: 10, name: t("brands"), link: "/category/brands" },
    { id: 11, name: t("premium"), link: "/category/premium" },
    { id: 12, name: t("new-arrivals"), link: "/category/new-arrivals" },
  ];

  return (
    <nav className="md:bg-lightGray-100 flex justify-center py-1 md:py-2 px-1">
      <div className="container flex items-center text-sm">
        <Link href="/category/all" className="underline font-bold me-4 min-w-fit text-blueCustom-200 md:text-black">
          {t("all-categories")}
        </Link>
        {/* categories list */}
        <ul className="flex items-center gap-3 md:gap-4 overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100 ">
          {navList.map((item) => (
            <li key={item.id} className="min-w-fit">
              <Link href={item.link} className="w-fit">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
