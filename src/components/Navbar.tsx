import Link from "next/link";

const mainNavLinks = [
  { "title": "Home", "href": "/" },
  { "title": "About", "href": "/about" },
  { "title": "Works", "href": "/works" },
];

export default function Navbar() {
  return (
    <div className="px-14 fixed top-0 w-full flex grid w-full grid-cols-3 p-4">
      <div className="flex items-center justify-start">
        <Link
          className="text-xl"
          href="/"
        >YNYDev</Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-2 items-center border border-[#444444] rounded-full p-1 overflow-hidden">
          {mainNavLinks.map((links) => (
            <div key={links.href} className="hover:shadow-[0_0_100px_50px_rgba(255,_255,_255,_0.2)] rounded-full duration-300">
              <Link
                className="flex justify-center px-5 py-1 hover:shadow-[inset_50px_50px_100px_50px_rgba(255,_255,_255,_0.2)] rounded-full duration-300"
                href={links.href}
              >{links.title}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end">
        <Link
          href="https://discord.com/users/1436998440386297886"
        >
          <span className="px-5 py-2 rounded-full bg-[#cfcfcf] hover:bg-white text-black duration-300">Contact</span>
        </Link>
      </div>
    </div>
  );
}
