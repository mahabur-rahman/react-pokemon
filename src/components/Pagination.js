import React from "react";

export const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
  return (
    <div>
      {gotoPrevPage && (
        <button className="btn border-1 border-dark" onClick={gotoPrevPage}>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button
          className="btn border-1 border-dark mx-2"
          onClick={gotoNextPage}
        >
          Next
        </button>
      )}
    </div>
  );
};
