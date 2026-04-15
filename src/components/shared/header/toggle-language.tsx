"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import "flag-icons/css/flag-icons.min.css";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  // Functions
  const convertLanguage = (value: string): void => {
    router.push("/" + value + currentPath.slice(3));
  };

  // Effects
  useEffect(() => {
    document.body.dir = currentPath.slice(0, 3) === "/ar" ? "rtl" : "ltr";
  }, [currentPath]);

  return (
    <div className="relative cursor-pointer hidden md:block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="border-0 outline-none focus-visible:border-none">
          <button className="flex ">
            <span className={`fi fi-${currentPath.slice(0, 3) === "/ar" ? "eg" : "us"} mx-2`}></span>
            <ChevronDown />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-20  bg-lightGray-300 **:not-first:border-t **:not-first:border-t-gray-400"
          align={currentPath.slice(0, 3) === "/ar" ? "start" : "end"}
        >
          {/* language options */}
          {languages.map(({ code, name, country_code }) => (
            <DropdownMenuItem
              key={country_code}
              onClick={() => convertLanguage(code)}
              className="flex items-center gap-2 px-2 py-0.5 rounded-none"
            >
              <span className={`fi fi-${country_code}`}></span>
              {name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
