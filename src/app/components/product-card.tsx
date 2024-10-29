import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProductCardProps {
  src: StaticImageData;
  alt: string;
}

export function ProductCard({ src, alt }: ProductCardProps) {
  return (
    <Link href="/product" className="group">
      <div className="flex w-[42rem] flex-col justify-between rounded-lg bg-red-300 bg-gradient-to-b from-primary to-purple-700 shadow-lg">
        <div className="flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            width={550}
            height={550}
            className="transition-transform group-hover:scale-105"
          />
        </div>

        <footer className="m-1 flex items-center justify-between rounded-lg bg-elements p-8">
          <p className="text-lg font-bold text-text transition-colors group-hover:text-white">
            Camiseta Beyound The Limits
          </p>
          <p className="text-lg font-bold text-secondary transition-colors group-hover:text-secondary-light">
            R$ 79,90
          </p>
        </footer>
      </div>
    </Link>
  );
}
