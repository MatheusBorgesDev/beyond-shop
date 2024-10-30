import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps {
  src: StaticImageData;
  alt: string;
}

export function ProductCard({ src, alt }: ProductCardProps) {
  return (
    <Link
      href="/product"
      className="group relative flex flex-col items-center justify-center rounded-lg bg-red-300 bg-gradient-to-b from-primary to-purple-700 shadow-lg"
    >
      <Image
        src={src}
        alt={alt}
        width={550}
        height={550}
        className="transition-transform group-hover:scale-110"
      />

      <footer className="absolute bottom-0 m-1 flex w-[98%] translate-y-[110%] items-center justify-between rounded-lg bg-elements p-8 transition-all group-hover:translate-y-0">
        <strong className="text-lg font-bold text-text transition-colors hover:text-white">
          Camiseta Beyound The Limits
        </strong>
        <p className="text-xl font-bold text-secondary transition-colors hover:text-secondary-light">
          R$ 79,90
        </p>
      </footer>
    </Link>
  );
}
