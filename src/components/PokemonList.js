import React from "react";

const PokemonList = ({ pokenmon }) => {
  return (
    <>
      <div>
        {pokenmon.map((p) => {
          return (
            <div key={p}>
              <h2>{p}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PokemonList;
