import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getPopularMovies, getNow_Playing, getTranslations} from "../api/tmdb-api";




export const MoviesContext = createContext(null);

const reducer = (state, action) => {

  switch (action.type) {

  
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        popular: state.popular.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m 
          ),

        nowPlaying: state.now_playing.map((m) =>
        m.id === action.payload.movie.id ? {...m, favorite: true} : m
        ),
       
        upcoming: [...state.upcoming],
        translations: [...state.translations],
        
      };

    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], popular: [...state.popular], now_playing: [...state.now_playing] };

    case "load-upcoming":
      return {upcoming: action.payload.movies, movies: [...state.movies], popular: [...state.popular], now_playing: [...state.now_playing] };

    case "load-popular":
        return {popular: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], now_playing: [...state.now_playing] };

    case "load-now_playing":
        return {now_playing: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], popular: [...state.popular] };

    case "see-translations":
      return {
        translations: state.translations.map ((m) =>
        m.id === action.payload.movie.id ? { ...m, translations: true } : m
        ),
        
      
        movies: [...state.movies],
       
      };

      case "add-watchList":
        return {
          upcoming: state.upcoming.map ((m) =>
          m.id === action.payload.movie.id ? { ...m, watchList: true } : m
          ),
          
          
          movies: [...state.movies],
         
        };
        
    
      case "add-review":
        return {
          movies: state.movies.map((m) =>
            m.id === action.payload.movie.id
              ? { ...m, review: action.payload.review }
              : m
          ),

          upcoming: [...state.upcoming],
         
          
        };
      
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], popular:[], now_playing:[], translations:[] });


  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });

  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchList", payload: { movie: state.upcoming[index] } });
  };

  const seeTranslations = (movieId) => {
    const index = state.translations.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "see-translations", payload: { movie: state.translations[index] } });
  };



  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNow_Playing().then((movies) => {
      dispatch({ type: "load-now_playing", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTranslations().then((movies) => {
      dispatch({ type: "load-translations", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        popular: state.popular,
        now_playing: state.now_playing,
        translations: state.translations,
        addToFavorites: addToFavorites,
        addToWatchList: addToWatchList,
        addReview: addReview,
        seeTranslations: seeTranslations,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
