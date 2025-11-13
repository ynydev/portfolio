import Link from "next/link";

const mainNavLinks = [
  {
    "title": "Home",
    "href": "/"
  },
  {
    "title": "About",
    "href": "/about"
  },
  {
    "title": "Works",
    "href": "/works"
  },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full flex grid w-full grid-cols-3 p-4">
      <div className="flex items-center justify-center">
        <Link
          className="text-xl"
          href="/"
        >YNYDev</Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-2 items-center border border-[#444444] rounded-full px-2 py-2">
          {mainNavLinks.map((links) => (
            <Link
              key={links.href}
              className="flex justify-center px-4 py-1 hover:bg-white hover:text-black rounded-full duration-300"
              href={links.title}
            >{links.title}</Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="https://discord.com/users/1436998440386297886"
        >
          <span className="p-3 rounded-full bg-[#cfcfcf] hover:bg-white text-black duration-300">Contact</span>
        </Link>
      </div>
    </div>
  );
}
