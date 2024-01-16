import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const AnimeCard = ({ anime }) => {
  return (
    <Link href={`/AnimeDetails/${anime.id}`}>
      <div className="max-w-sm rounded relative w-full border border-white flex flex-col hover:bg-gray-800 cursor-pointer">
        <div className="relative w-full h-[37vh]">
          <Image
            src={`https://shikimori.one${anime.image.original}`}
            alt={anime.name}
            fill
            className="rounded-xl p-2"
          />
        </div>

        <div className="py-4 flex flex-col gap-3 px-2 ">
          <div className="flex justify-center items-center flex-col">
            <h2 className="font-semibold text-black dark:text-white flex items-center justify-center">
              {anime.name}
            </h2>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>No of episodes: </p>
            <p>{anime.episodes || anime.episodes_aired}</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p className="flex items-center justify-center">
              Rating: {anime.score}
              <FaStar color="yellow" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
