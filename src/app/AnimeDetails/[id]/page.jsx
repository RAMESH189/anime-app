import { getAnime } from "@/app/action";
import Image from "next/image";
import React from "react";

const AnimeDetails = async ({ params }) => {
  const animeId = params.id;
  const anime = await getAnime(animeId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6 text-black dark:text-white">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          width={500}
          height={300}
          style={{
            height: "500px",
          }}
          alt={anime.name}
          className="rounded-lg border border-black dark:border-white p-4 shadow-md"
        />
        <div className="p-4 flex flex-col items-center md:items-start">
          <h2 className="mb-4 font-bold text-xl">Name: {anime.name}</h2>
          <p className="mb-4">Released on: {anime.released_on}</p>
          <p className="mb-4 font-bold">No of episodes: {anime.episodes}</p>
          <p className="font-bold">Rating : {anime.score || "No rating"}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
