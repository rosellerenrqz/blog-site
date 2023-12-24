import { urlFor } from "@/libs/createClient";
import Image from "next/image";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="flex items-center justify-center">
          <Image
            src={urlFor(value)}
            alt="Post Image"
            width={700}
            height={700}
            className="object-contain py-6"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul>{children}</ul>;
    },
  },
  number: ({ children }: any) => {
    return <ol className="mt-lg list-decimal">{children}</ol>;
  },
  block: {
    h1: ({ children }: any) => {
      return <h1 className="text-4xl py-10 font-bold">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="text-3xl py-10 font-bold">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-2xl py-10 font-bold">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-2xl py-10 font-bold">{children}</h4>;
    },
    blockqote: ({ children }: any) => {
      return (
        <blockquote className="border-l-blue-600 border-l-4 pl-5 py-5 my-5">
          {children}
        </blockquote>
      );
    },
  },
};
