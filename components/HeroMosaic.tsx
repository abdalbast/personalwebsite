"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

// Client stub: we will pass projects from server to avoid fs usage on client
export type MosaicItem = { href: string; src: string; alt: string };

export default function HeroMosaic({ items }: { items: MosaicItem[] }) {
  const grid = useMemo(() => items.slice(0, 6), [items]);
  return (
    <div className="grid grid-cols-3 gap-2">
      {grid.map((it, i) => (
        <Link key={i} href={it.href} className="block group overflow-hidden rounded-lg">
          <div className="relative aspect-square">
            <Image
              src={it.src}
              alt={it.alt}
              fill
              sizes="(min-width: 1024px) 400px, 33vw"
              className="object-cover transition-transform duration-500 group-hover:-translate-y-[6px]"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
