import React, { Suspense } from "react";
import "./App.scss";
import {Switch, Route, useHistory, useLocation} from "react-router-dom";
const HomePage = React.lazy(() => import("homepage/HomePage"));
const DetailsPage = React.lazy(() => import("detailspage/DetailsPage"));
const SeatSelectionPage = React.lazy(() =>
  import("seatselection/SeatSelection")
);

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const _handleMovieClick = (movie) => {
    history.push(`/details/${movie.id}` );
  }
  
  return (
    <Switch>
      <Route path="/details/:id">
        <Suspense fallback={<div>loading</div>}>
          <DetailsPage routing={{history, location}} ></DetailsPage>
        </Suspense>
      </Route>
      <Route path="/book">
        <Suspense fallback={<div>loading</div>}>
          <SeatSelectionPage></SeatSelectionPage>
        </Suspense>
      </Route>
      <Route path="/">
        <Suspense fallback={<div>loading</div>}>
          <HomePage routing={{history, location}} handleMovieClick={_handleMovieClick}></HomePage>
        </Suspense>
      </Route>
    </Switch>
  );
};

export default App;
