import { Link } from "@/i18n/navigation";

const navList = [
  { id: 1, name: "النساء", link: "/category/women" },
  { id: 2, name: "الرجال", link: "/category/men" },
  { id: 3, name: "الاطفال والالعاب", link: "/category/children" },
  { id: 4, name: "الجمال والعطور", link: "/category/beauty" },
  { id: 5, name: "رياضة", link: "/category/sports" },
  { id: 6, name: "المنزل", link: "/category/home" },
  { id: 7, name: "الالكترونيات ", link: "/category/electronics" },
  { id: 8, name: "احذية ", link: "/category/shoes" },
  { id: 9, name: "شنط", link: "/category/bags" },
  { id: 10, name: "ماركات", link: "/category/brands" },
  { id: 11, name: "بريميوم", link: "/category/premium" },
  { id: 12, name: "وصل حديثا  ", link: "/category/new-arrivals" },
];

export default function NavCategories() {
  return (
    <nav className="md:bg-lightGray-100 flex justify-center py-1 md:py-2 px-1">
      <div className="container flex items-center text-sm">
        <p className="underline font-bold me-4 min-w-fit text-blueCustom-200 md:text-black">كل قائمة الفئات</p>
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
