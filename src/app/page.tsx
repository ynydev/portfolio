import Button from "@/components/ui/Button";
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
          <Button variant="primary" href="/about">About me</Button>
          <Button variant="secondary" href="/contact">Contact me</Button>
        </div>
      </div>
    </div>
  );
}