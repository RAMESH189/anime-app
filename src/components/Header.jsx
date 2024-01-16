import React from "react";
import Image from "next/image";
import logo from "../../public/anime.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex justify-between  text-black dark:text-white align-middle items-center p-3 bg-white dark:bg-gray-900">
      <Image src={logo} width={50} height={50} className="ml-5" />
      <Link href={"/"}>
        <h2 className="border border-white p-2 rounded-xl font-bold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">
          The Anime App
        </h2>
      </Link>
    </header>
  );
};

export default Header;
