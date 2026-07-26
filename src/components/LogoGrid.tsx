import Image from "next/image";

const clientLogos = [
  { name: "Montax", src: "/images/logos/montax.svg", width: 130 },
  { name: "MK Food Co", src: "/images/logos/mkfc.svg", width: 120 },
  { name: "Dragons Inn", src: "/images/logos/dragons-inn-2.png", width: 120 },
  { name: "BF Bins", src: "/images/logos/bfbins.png", width: 120 },
  { name: "Purelixr", src: "/images/logos/purelixr-2.svg", width: 120 },
  { name: "RV Properties", src: "/images/logos/rvp.svg", width: 130 },
  { name: "BC AWE", src: "/images/logos/bcawe.jpg", width: 90 },
  { name: "CCS", src: "/images/logos/ccs.svg", width: 100 },
  { name: "Another World", src: "/images/logos/anotherworld-1.svg", width: 130 },
];

export default function LogoGrid() {
  return (
    <section className="py-20 border-y border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-2">
            Trusted Partners & Clients
          </span>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">
            Brands Built on Our Infrastructure
          </h3>
        </div>

        {/* Clean Static Grid with Completely Transparent Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-center">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="h-20 bg-transparent border border-transparent hover:border-zinc-800/60 rounded-2xl p-3 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={50}
                className="max-h-12 w-auto object-contain transition-opacity duration-300 opacity-80 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
