import React from "react";
import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const navigations = [
  {
    icon: (
      <FaFacebook size={20} className="cursor-pointer hover:text-blue-400" />
    ),
    href: "https://www.facebook.com/",
  },
  {
    icon: (
      <FaInstagram size={20} className="cursor-pointer hover:text-orange-400" />
    ),
    href: "https://www.instagram.com",
  },
  {
    icon: <FaXTwitter size={20} className="cursor-pointer hover:opacity-70" />,
    href: "https://www.twitter.com",
  },
  {
    icon: <FaYoutube size={20} className="cursor-pointer hover:text-red-400" />,
    href: "https://www.youtube.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black/90 border-b shadow-md">
      <div className="flex text-white justify-between flex-col gap-10 sm:flex-row p-10 items-center lg:px-7 mt-5 max-w-2xl mx-auto lg:max-w-7xl">
        <Logo title="Blog" className="text-white" />
        <ul className="flex gap-4">
          {navigations.map((nav, index) => (
            <Link key={index} href={nav.href} target="_blank">
              {nav.icon}
            </Link>
          ))}
        </ul>
        <div className="text-sm">© All rights reserved @rosellenrqz</div>
      </div>
    </footer>
  );
};

export default Footer;
