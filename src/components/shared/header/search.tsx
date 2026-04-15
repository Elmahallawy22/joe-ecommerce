import Image from "next/image";

export default function Search() {
  return (
    <div className="flex-1 bg-lightGray-200 md:bg-white border border-lightGray-200 h-10 flex justify-between items-center gap-2 px-2 md:px-4 py-3 rounded-sm">
      <Image src="/icons/search.png" alt="" width="18" height="18" />
      <input type="text" placeholder="انت بتدور علي اية ؟" className="outline-none flex-1" />
      <Image src="/icons/gallery.png" alt="" width="24" height="24" />
    </div>
  );
}
