import Button from "../ui/Button";

export default function HomeComponent() {
  return (
    <div className="top-20 w-full space-y-[30px]">
      <div className="flex flex-col items-start justify-start">
        <h1 className="lg:text-5xl md:text-4xl text-3xl">Web design that combines usability and beauty</h1>
        <p className="md:text-2xl text-xl text-[#cbcbcb]">I am YNYDev</p>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="primary" href="/about">About me</Button>
        <Button variant="secondary" href="/contact">Contact me</Button>
      </div>
    </div>
  );
}