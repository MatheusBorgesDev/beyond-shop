"use client";

import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";

import product1 from "../assets/t-shirt-1.png";
import product2 from "../assets/t-shirt-2.png";
import product3 from "../assets/t-shirt-3.png";
import { ProductCard } from "./components/product-card";

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <main className="ml-auto flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1180px)/2))] py-4">
      <div ref={sliderRef} className="keen-slider flex h-full w-full">
        <div className="keen-slider__slide">
          <ProductCard src={product1} alt="" />
        </div>
        <div className="keen-slider__slide">
          <ProductCard src={product2} alt="" />
        </div>
        <div className="keen-slider__slide">
          <ProductCard src={product3} alt="" />
        </div>

        <div className="keen-slider__slide">
          <ProductCard src={product1} alt="" />
        </div>
      </div>
    </main>
  );
}
