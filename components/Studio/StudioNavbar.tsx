import Link from "next/link";
import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

const StudioNavbar = (props: any) => {
  return (
    <>
      <div className="bg-gray-500 p-4 flex justify-between">
        <Link href="/" className="flex gap-4 text-white hover:opacity-70">
          <RiArrowGoBackFill size={25} />
          <h1 className="text-lg font-medium">Go Back To Website</h1>
        </Link>

        <div className="text-2xl font-semibold text-white">BLOG STUDIO</div>
        <div></div>
      </div>
      <div>{props.renderDefault(props)}</div>
    </>
  );
};

export default StudioNavbar;
