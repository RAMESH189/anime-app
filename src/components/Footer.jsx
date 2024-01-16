import Link from "next/link";
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";

function Footer() {
  return (
    <footer className="flex md:flex-row flex-col sm:px-16 pt-4 pb-6 px-8 justify-between items-center gap-2 flex-wrap dark:bg-gray-900 bg-white">
      <p className="text-xl font-bold text-black dark:text-white border dark:hover:bg-white dark:hover:text-black border-white p-4 rounded-lg">
        The Anime App
      </p>

      <div className="flex items-center gap-6 text-black dark:text-white">
        <Link href="https://www.linkedin.com/in/ramesh-pr/" target="_blank">
          <IoLogoLinkedin size={30} />
        </Link>
        <Link
          href="https://www.instagram.com/_ramesh_rajendran_/"
          target="_blank"
        >
          <IoLogoInstagram size={30} />
        </Link>
        <Link href="https://github.com/RAMESH189/anime-app" target="_blank">
          <IoLogoGithub size={30} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
