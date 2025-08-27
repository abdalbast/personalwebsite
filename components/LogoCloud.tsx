import logos from "@/content/logos.json";
import Image from "next/image";

export default function LogoCloud() {
  return (
    <div className="flex flex-wrap items-center gap-6 opacity-80">
      {logos.items.map((l) => (
        <a key={l.name} href={l.url} className="grayscale hover:grayscale-0 transition" aria-label={l.alt}>
          <Image src={l.src} alt={l.alt} width={120} height={40} />
        </a>
      ))}
    </div>
  );
}
