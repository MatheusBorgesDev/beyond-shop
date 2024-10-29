import product1 from "../assets/t-shirt-1.png";
import product2 from "../assets/t-shirt-2.png";
import product3 from "../assets/t-shirt-3.png";
import { ProductCard } from "./components/product-card";

export default function Home() {
  return (
    <main className="ml-auto flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1180px)/2))] gap-3 py-4">
      <ProductCard src={product1} alt="" />
      <ProductCard src={product2} alt="" />
      <ProductCard src={product3} alt="" />
    </main>
  );
}
