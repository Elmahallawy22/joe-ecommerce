"use client";

import Image from "next/image";
import Search from "./search";
import { Link } from "@/i18n/navigation";
import ToggleLanguage from "./toggle-language";

const headerList = [
  { id: 1, name: "تسجيل الدخول", link: "/login", icon: "/icons/user.png" },
  { id: 2, name: "المفضلة", link: "/wishlist", icon: "/icons/Heart.svg" },
  { id: 3, name: "عربة التسوق", link: "/cart", icon: "/icons/shopping-cart.png" },
];

export default function MainHeader() {
  return (
    <header className="md:bg-lightGray-100 flex justify-center py-1 md:py-3 px-1">
      <div className="container flex justify-between items-center gap-2 lg:gap-4">
        <Image src="/logo.png" alt="" width={50} height={40} className="w-12 h-8" />
        <Search />
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
        <ToggleLanguage />
      </div>
    </header>
  );
}
