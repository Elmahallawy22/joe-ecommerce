import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

type TitleSectionProps = {
  title: string;
  link: string;
  href: string;
};

export default function TitleSection({ title, link, href }: TitleSectionProps) {
  return (
    <div className="flex justify-center mb-4">
      <div className="container flex justify-between items-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <Link href={href} className="flex items-center gap-1">
          {link}
          <ChevronRight className="rtl:rotate-180" />
        </Link>
      </div>
    </div>
  );
}
