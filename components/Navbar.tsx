"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigations = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "About Me", href: "/about-me" },
  { name: "Studio", href: "/studio" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="bg-white/70 border-b">
      <nav className="flex justify-between p-4 items-center lg:px-7 max-w-2xl mx-auto lg:max-w-7xl">
        <h1>
          <Logo title="Blog" className="text-black" />
        </h1>
        <div className="flex gap-4 md:gap-7">
          {navigations.map((nav) => (
            <Link
              href={nav.href}
              key={nav.name}
              className={`text-sm md:text-base font-medium uppercase ${
                pathname === nav.href ? "text-blue-400" : "text-gray-700"
              } hover:underline hover:text-black duration-200`}>
              {nav.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
