import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full px-14 space-y-[30px]">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-4xl">Web design that combines usability and beauty</h1>
          <p className="text-2xl text-[#cbcbcb]">I am YNYDev</p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            className="border border-[#444444] px-4 py-2 rounded-full hover:shadow-[inset_50px_50px_100px_50px_rgba(255,_255,_255,_0.08)] duration-300"
            href="/about"
          >About me</Link>
          <Link
            className="px-4 py-2 rounded-full bg-[#cfcfcf] text-black hover:bg-white duration-300"
            href="/contact"
          >
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
}