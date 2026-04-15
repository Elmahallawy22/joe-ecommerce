"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import "flag-icons/css/flag-icons.min.css";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/tailwind-merge";

const languages = [
  {
    code: "en",
    name: "English",
    dir: "ltr",
    country_code: "us",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "eg",
  },
];

export default function ToggleLanguage() {
  // Navigation
  const router = useRouter();
  const currentPath = usePathname();

  // State
  const [showList, setShowList] = useState<boolean>(false);

  // Functions
  const convertLanguage = (value: string): void => {
    setShowList(false);
    router.push("/" + value + currentPath.slice(3));
  };

  // Effects
  useEffect(() => {
    document.body.dir = currentPath.slice(0, 3) === "/ar" ? "rtl" : "ltr";
  }, [currentPath]);

  return (
    <div className="relative cursor-pointer hidden md:block">
      <div
        className="flex"
        onClick={() => {
          setShowList(!showList);
        }}
      >
        <span className={`fi fi-${currentPath.slice(0, 3) === "/ar" ? "eg" : "us"} mx-2`}></span>
        <ChevronDown />
      </div>
      {showList && (
        <ul
          className={cn(
            "absolute bg-lightGray-300 top-7 inset-e-0 rounded **:not-first:border-t **:not-first:border-t-gray-200"
          )}
        >
          {languages.map(({ code, name, country_code }) => (
            <li
              key={country_code}
              onClick={() => convertLanguage(code)}
              className="flex items-center gap-2 px-2 py-0.5"
            >
              <span className={`fi fi-${country_code}`}></span>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
