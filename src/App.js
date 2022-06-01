import React, { useEffect, useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonList from "./components/PokemonList";
import axios from "axios";
import { Pagination } from "./components/Pagination";

const App = () => {
  const [pokenmon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon`
  );
  const [loading, setLoading] = useState(true);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
    setLoading(true);

    let cancel;

    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [currentPageUrl]);

  if (loading) return "Loading...";

  // next page
  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };
  // prev page

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  return (
    <div>
      <PokemonList pokenmon={pokenmon} />
      <Pagination
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
      />
    </div>
  );
};

export default App;
