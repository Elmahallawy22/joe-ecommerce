"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function MobileMenu() {
  // translations
  const t = useTranslations("header");
  
  // Navigation
  const currentPath = usePathname();

  // variables
  const headerList = [
    { id: 1, name: t("login"), link: "/login", icon: "/icons/user.png" },
    { id: 2, name: t("wishlist"), link: "/wishlist", icon: "/icons/Heart.svg" },
    { id: 3, name: t("cart"), link: "/cart", icon: "/icons/shopping-cart.png" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <button className="cursor-pointer">
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent
        className="bg-white md:hidden border-lightGray-100"
        side={currentPath.slice(0, 3) === "/ar" ? "right" : "left"}
      >
        {/* navigation items */}
        <ul className="flex flex-col items-center justify-center gap-8 h-full ">
          {headerList.map((item) => (
            <li key={item.id}>
              <Link href={item.link} className="flex items-center gap-2 hover:font-bold">
                <Image src={item.icon} alt="" width={20} height={20} className="inline-block mr-1" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
