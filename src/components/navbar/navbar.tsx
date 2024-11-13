"use client";
import { cn } from "@/utils/cn";
import { Link } from "../link";

type Section = "products" | "features" | "demo" | "pricing" | "contact";

export const Navbar = () => {
  return (
    <nav className="hidden lg:block" aria-label="Primary">
      <ul className="flex gap-8">
        <NavItem text="Features" section="features" />
        <NavItem text="Demo" section="demo" />
      </ul>
    </nav>
  );
};

const NavItem = ({ text, section }: { text: string; section: Section }) => {
  return (
    <li>
      <Link
        className={cn(
          "rounded-md px-5 py-2 duration-200 border border-transparent font-semibold",
          "hover:bg-neutral-400",
          "active:bg-neutral-900 active:border-neutral-400 active:text-secondary-300",
        )}
        href={`#${section}`}
      >
        {text}
      </Link>
    </li>
  );
};
