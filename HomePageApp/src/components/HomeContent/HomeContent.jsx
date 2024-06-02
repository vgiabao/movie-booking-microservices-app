import React, { Suspense, useEffect, useState } from "react";
import QuickBooking from "../QuickBooking/QuickBooking.jsx";
const MovieCard = React.lazy(() => import("remote_components/MovieCard"));
import "./HomeContent.scss";
import RoutingContext from "../../utils/RoutingProvider";
const dummyItem = [{ name: "Dummy Movie" }];

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  useEffect(async () => {
    // Add the logic to load the movies from server and set to the state
    const resp = await fetch("http://localhost:5555/movies");
    const data = await resp.json();
    setMovies(data);
  }, []);

  const handleMovieClick = (item) => {
    if (typeof props.handleMovieClick === "function") {
      props.handleMovieClick(item);
    }
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {
      return (
        <div onClick={() => handleMovieClick(item)} key={item.name}>
          <MovieCard title={item.name} imageUrl={item.imageUrl}></MovieCard>
        </div>
      );
    });

    return items;
  };
  

  return (
    <div className="home-content-container">
      <RoutingContext.Provider value={props.routing}>
      <QuickBooking></QuickBooking>
      <div className="movies-container">
        <Suspense fallback={null}>{renderMovieList()}</Suspense>
      </div>
      </RoutingContext.Provider>

    </div>
  );
};

export default HomeContent;
