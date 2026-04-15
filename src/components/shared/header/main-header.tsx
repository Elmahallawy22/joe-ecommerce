import Image from "next/image";
import Search from "./search";
import { Link } from "@/i18n/navigation";
import ToggleLanguage from "./toggle-language";
import MobileMenu from "./mobile-menu";
import { useTranslations } from "next-intl";

export default function MainHeader() {
  // translations
  const t = useTranslations("header");

  // variables
  const headerList = [
    { id: 1, name: t("login"), link: "/login", icon: "/icons/user.png" },
    { id: 2, name: t("wishlist"), link: "/wishlist", icon: "/icons/Heart.svg" },
    { id: 3, name: t("cart"), link: "/cart", icon: "/icons/shopping-cart.png" },
  ];
  return (
    <header className="md:bg-lightGray-100 flex justify-center py-1 md: px-1">
      <div className="container flex justify-between items-center gap-2 lg:gap-4">
        {/* logo */}
        <Image src="/logo.png" alt="" width={50} height={40} className="w-12 h-8" />
        {/* search component */}
        <Search />
        {/* navigation links */}
        <ul className="hidden md:flex items-center gap-4">
          {headerList.map((item) => (
            <li key={item.id}>
              <Link href={item.link} className="flex items-center gap-1 lg:gap-2 text-sm">
                {item.name}
                <Image src={item.icon} alt="" width={20} height={20} className="inline-block mr-1" />
              </Link>
            </li>
          ))}
        </ul>
        {/* language toggle */}
        <ToggleLanguage />
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
