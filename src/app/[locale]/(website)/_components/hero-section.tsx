import Image from "next/image";

const logos = [
  { name: "DeFacto", src: "/logos/defacto.png" },
  { name: "Adidas", src: "/logos/adidas.png" },
  { name: "Guess", src: "/logos/guess.png" },
  { name: "Lacoste", src: "/logos/lacoste.png" },
  { name: "Mango", src: "/logos/mango.png" },
  { name: "DeFacto", src: "/logos/defacto.png" },
  { name: "Adidas", src: "/logos/adidas.png" },
  { name: "Guess", src: "/logos/guess.png" },
  { name: "Lacoste", src: "/logos/lacoste.png" },
  { name: "Mango", src: "/logos/mango.png" },
];

export default function HeroSection() {
  return (
    <div className="flex justify-center">
      <div className="container">
        <Image src="/assets/hero.png" alt="" width={1000} height={500} className="w-full h-fit bg-white" />
        {/* outline container */}
        <div className="relative flex w-full overflow-hidden bg-[#eeeeee] py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#eeeeee] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#eeeeee] to-transparent z-10" />
          {/* shared container */}
          <div className="flex animate-marquee" style={{ width: "max-content" }}>
            {/* first group */}
            <div className="flex shrink-0 items-center gap-3 px-3">
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={48}
                  className="h-6 w-auto object-contain grayscale opacity-80"
                />
              ))}
            </div>
            {/* second group */}
            <div className="flex shrink-0 items-center gap-3 px-3">
              {logos.map((logo, index) => (
                <Image
                  key={`dup-${index}`}
                  src={logo.src}
                  alt={logo.name}
                  width={100}
                  height={48}
                  className="h-6 w-auto object-contain grayscale opacity-80"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
