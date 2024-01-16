import AnimeCard from "@/components/AnimeCard";
import LoadAnime from "@/components/LoadAnime";
import { fetchAnime } from "./action";
import Hero from "@/components/Hero";

export default async function Home() {
  const data = await fetchAnime(1);
  return (
    <main className="text-black dark:text-white sm:p-16 py-16 px-8 flex flex-col gap-10">
      <Hero />
      <h2 className="text-3xl text-white font-bold">Explore anime...</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </section>
      <LoadAnime />
    </main>
  );
}
