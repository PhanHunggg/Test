import React from "react";
import CarouselMovie from "./components/carousel/CarouselMovie";
import MovieList from "./components/movie-list/MovieList";

export default function HomePage() {
  return (
    <div className="py-5">
      <CarouselMovie />
      <MovieList />
    </div>
  );
}
