"use client";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Client stub: we will pass projects from server to avoid fs usage on client
export type MosaicItem = { href: string; src: string; alt: string };

export default function HeroMosaic({ items }: { items: MosaicItem[] }) {
  const grid = useMemo(() => items.slice(0, 6), [items]);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -10]);
  return (
    <div className="grid grid-cols-3 gap-2">
      {grid.map((it, i) => (
        <Link key={i} href={it.href} className="block group overflow-hidden rounded-lg">
          <motion.div
            className="relative aspect-square"
            whileHover={{ y: -6 }}
            style={{ y }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <Image
              src={it.src}
              alt={it.alt}
              fill
              sizes="(min-width: 1024px) 400px, 33vw"
              className="object-cover"
            />
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
