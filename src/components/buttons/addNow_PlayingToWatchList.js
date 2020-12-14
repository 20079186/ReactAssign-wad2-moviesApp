import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddNow_PlayingToWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddNow_PlayingToWatchList = e => {
    e.preventDefault();
    context.addNow_PlayingToWatchList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddNow_PlayingToWatchList}
    >
      Add to Watch List
    </button>
  );
};

export default AddNow_PlayingToWatchListButton;