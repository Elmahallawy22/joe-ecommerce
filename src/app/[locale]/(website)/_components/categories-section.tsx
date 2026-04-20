import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CategoriesSection() {
  // translation
  const t = useTranslations("home.categories");

  // variable for categories list
  const categoriesList = [
    { id: 1, name: t("men"), asset: "/assets/cat_men.png" },
    { id: 2, name: t("women"), asset: "/assets/cat_women.png" },
    { id: 3, name: t("children"), asset: "/assets/cat_children.png" },
    { id: 4, name: t("care"), asset: "/assets/cat_care.png" },
    { id: 5, name: t("electronics"), asset: "/assets/cat_electric.png" },
    { id: 6, name: t("mobiles"), asset: "/assets/cat_mobiles.png" },
    { id: 7, name: t("brands"), asset: "/assets/cat_brands.png" },
    { id: 8, name: t("offers"), asset: "/assets/cat_offer.png" },
  ];

  return (
    <div className="flex justify-center">
      <div className="container">
        <ul className="flex justify-center xl:justify-evenly gap-2.5 md:gap-4 flex-wrap">
          {categoriesList.map((category) => (
            <li key={category.id} className="flex flex-col items-center gap-1 text-sm lg:text-base text-center">
              <Image
                src={category.asset}
                alt={category.name}
                width={140}
                height={140}
                className="size-20 sm:size-24 md:size-28 xl:size-36"
              />
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
