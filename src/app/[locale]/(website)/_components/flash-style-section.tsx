import TitleSection from "@/components/shared/title-section";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLocale } from "next-intl";

const topItems = Array.from({ length: 5 });

export default function FlashStyleSection() {
  // locale and direction
  const locale = useLocale();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <section dir={direction}>
      <TitleSection title={"title"} link={"link"} href="/" />
      <div className="grid grid-cols-10">
        <div className="col-span-10 md:col-span-7 bg-lightGray-100 px-16 p-6">
          <Carousel opts={{ align: "start", direction }} className="w-full">
            <CarouselContent className="-ml-1">
              {topItems.map((_, index) => (
                <CarouselItem key={index} className="pl-1 basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col gap-1">
                    <div className="p-4 bg-amber-400">{index} top</div>
                    <div className="p-4 bg-red-400">{index} bottom</div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Image src="/assets/product-sidebar.png" alt="" width={300} height={1000} className="hidden md:block md:col-span-3 w-full" />
      </div>
    </section>
  );
}
