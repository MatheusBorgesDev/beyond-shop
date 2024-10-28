import Image from "next/image";

export function Header() {
  return (
    <header className="mx-auto my-0 w-full p-8">
      <div className="flex w-full items-center gap-4">
        <Image src="/logo.png" alt="Beyond Shop" width={55} height={55} />
        <div>
          <h1 className="text-primary-light text-3xl font-bold">Beyond</h1>
          <span>Shop</span>
        </div>
      </div>
    </header>
  );
}
