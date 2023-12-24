import { client, urlFor } from "@/libs/createClient";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RichText";

interface Props {
  params: {
    slug: string;
  };
}

const socialLinks = [
  {
    icon: <FaYoutube size={25} />,
    href: "https://youtube.com",
    className: "bg-red-500 hover:opacity-60 duration-200",
  },
  {
    icon: <FaGithub size={25} />,
    href: "https://github.com",
    className: "bg-gray-600 hover:opacity-60 duration-200",
  },
  {
    icon: <FaFacebook size={25} />,
    href: "https://facebook.com",
    className: "bg-blue-600 hover:opacity-60 duration-200",
  },
  {
    icon: <FaInstagram size={25} />,
    href: "https://instagram.com",
    className: "bg-orange-600 hover:opacity-60 duration-200",
  },
  {
    icon: <FaLinkedin size={25} />,
    href: "https://linkedin.com",
    className: "bg-blue-500 hover:opacity-60 duration-200",
  },
];

export const revalidate = 30;

const getData = async (slug: Props) => {
  const query = `*[_type == 'post' && slug.current == '${slug}'] {
    ...,
    body,
      author->
  }`;

  const data = await client.fetch(query);
  return data;
};

export default async function ReadMorePage({
  params,
}: {
  params: { slug: Props };
}) {
  const datas = await getData(params.slug);
  // console.log("datas", datas);
  return (
    <>
      <div className="max-w-2xl mx-auto mb-10 flex flex-col px-4 gap-10 lg:px-7 lg:max-w-7xl">
        {datas.map((data: any) => {
          // console.log("data", data);
          return (
            <div key={data._id}>
              <div
                // key={data._id}
                className="flex flex-col lg:flex-row mb-10 justify-between">
                <Image
                  src={urlFor(data?.mainImage)}
                  alt={data.title}
                  width={700}
                  height={800}
                  className="object-cover w-full mb-10"
                />
                {/* AUTHOR */}
                <div className="flex w-full items-center text-center justify-center flex-col gap-5">
                  <Image
                    src={urlFor(data.author.image)}
                    alt={data.author.name}
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                  <div className="font-semibold text-lg text-blue-500">
                    {data.author.name}
                  </div>
                  <div className="text-gray-500 text-sm lg:w-4/5">
                    {data.author.bio[0].children[0].text}
                  </div>
                  {/* SOCIALS */}
                  <div className="flex gap-2">
                    {socialLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        target="_blank"
                        className={`p-2 rounded-full text-white ${link.className}`}>
                        {link.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <PortableText value={data?.body} components={RichText} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
