"use client";
import { urlFor } from "@/libs/createClient";
import { Post } from "@/types/ContentData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  console.log("posts", posts);
  return (
    <>
      <div className="max-w-2xl mx-auto py-20 px-10 flex flex-col gap-10 lg:max-w-7xl">
        {posts.map((post) => (
          <Link href={post?.slug.current} key={post._id}>
            {/* IMAGE */}
            <div className="flex flex-col md:flex-row gap-10 bg-white rounded-md rounded-tl-md rounded-br-md hover:shadow-md duration-200">
              <div className="relative w-full md:w-3/5 group overflow-hidden rounded-tl-md rounded-bl-md">
                <Image
                  src={urlFor(post?.mainImage)}
                  alt={post?.title}
                  width={500}
                  height={500}
                  className="w-full max-h-[500px] object-cover group-hover:scale-105 duration-500 rounded-tl-md rounded-bl-md"
                />
                <div className="absolute top-0 left-0 bg-black/20 w-full h-full group-hover:hidden duration-200" />
                <div className="absolute hidden group-hover:inline-block bottom-0 left-0 w-full duration-200 backdrop-blur-xl rounded-md bg-black/20 hover:bg-black/30">
                  <p className="text-lg font-semibold text-center text-white p-2">
                    Click to read!
                  </p>
                </div>
              </div>

              {/* TEXT */}
              <div className="w-full md:w-2/5 flex flex-col justify-between py-10 px-4">
                <div>
                  {post.categories.map((category) => (
                    <p
                      key={category._id}
                      className="text-sm font-bold text-blue-500 uppercase">
                      {category.title}
                    </p>
                  ))}
                </div>
                <div className="text-lg font-bold md:text-xl hover:text-orange-400 duration-200">
                  {post?.title}
                </div>
                <div className="text-gray-500">
                  {post?.categories.map((category) => (
                    <p key={category._id}>
                      {category.description.slice(0, 100)}...
                    </p>
                  ))}
                </div>
                <div className="flex justify-between flex-col-reverse sm:flex-row gap-5 my-5 items-start sm:items-center">
                  <p className="text-gray-500 text-sm">
                    {new Date(post?._createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={urlFor(post?.author.image)}
                      alt={post?.author._type}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <p className="text-sm">{post?.author.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogContent;
