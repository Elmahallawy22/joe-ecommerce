"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils/tailwind-merge";
import { Heart, House, ShoppingCart, UserRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function MobNavigations() {
  const t = useTranslations("header");

  const navigationsList = [
    { id: 1, name: t("mob-home"), link: "/", active: undefined, icon: <House className="size-6 sm:size-7" /> },
    { id: 2, name: t("cart"), link: "/cart", active: "cart", icon: <ShoppingCart className="size-6 sm:size-7" /> },
    { id: 3, name: t("wishlist"), link: "/wishlist", active: "wishlist", icon: <Heart className="size-6 sm:size-7" /> },
    { id: 4, name: t("login"), link: "/login", active: "login", icon: <UserRound className="size-6 sm:size-7" /> },
  ];
  const pathname = usePathname(); // بيرجع "/en/about"
  const segments = pathname.split("/"); // ["", "en", "about"]

  const page = segments[2]; // "about"

  console.log("Current page:", page); // "about"

  return (
    <ul className="fixed bottom-0 left-0 right-0 bg-white md:hidden flex justify-around items-center py-2 sm:py-3 z-50 drop-shadow-2xl/50 shadow-red-900">
      {navigationsList.map((item) => (
        <li key={item.id}>
          <Link
            href={item.link}
            className={cn("flex flex-col items-center text-gray-500 text-sm sm:text-base", page == item.active && "text-blueCustom-200")}
          >
            {item.icon} {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
