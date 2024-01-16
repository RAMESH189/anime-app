"use client";

import { fetchAnime } from "@/app/action";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";

let page = 2;

const LoadAnime = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);

      const timeoutId = setTimeout(() => {
        fetchAnime(page).then((res) => {
          setData([...data, ...res]);
          page++;
        });

        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [data, inView, isLoading]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </section>
      <section className="flex justify-center items-center">
        <div ref={ref}>
          {inView && isLoading && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default LoadAnime;
