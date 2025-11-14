import Link from "next/link";

type variant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: variant;
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  href,
  className
}: ButtonProps) {
  const variantClasses = {
    "primary": "border border-[#444444] px-5 py-2 rounded-full hover:shadow-[inset_50px_50px_100px_50px_rgba(255,_255,_255,_0.1)] duration-300",
    "secondary": "px-5 py-2 rounded-full bg-[#cfcfcf] hover:bg-white text-black duration-300"
  }
  return (
    <Link
      href={href}
      className={className}
    >
      <span className={variantClasses[variant]}>
        {children}
      </span>
    </Link>
  );
}