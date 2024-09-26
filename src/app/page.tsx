import Image from "next/image";

export default function Home() {
  // joe mama
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl  animate-spin">sto<span className="text-4xl">X</span>.</h1>
      <button className="btn btn-primary">testing</button>
    </div>
  );
}
