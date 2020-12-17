# Assignment 1 - ReactJS app.

Name: Amie Abbotts

## Features.
 
 + Feature 1 - Latest Movie Page
 + Feature 2 - Popular Movie Page
 + Feature 3 - Now Playing Page
 + Feature 4 - WatchList Page
 + Feature 5 - Favorites button for popular movies
 + Feature 6 - WatchList button for now playing movies


## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/popular - list of popular movies
+ https://api.themoviedb.org/3/movie/now_playing - list of movies playing now
+ https://api.themoviedb.org/3/movie/latest  - a live response of the lastest movie 
//+ not used
// https://api.themoviedb.org/3/movie/{movie_id}/translations - movie translations
// https://api.themoviedb.org/3/movie/{movie_id}/credits - cast and crew credits

## App Design.

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/watchList (protected) - displays the movies the user wants to watch at a later time
+ /movies/popular (protected) - displays popular movies
+ /movies/nowPlaying (protected) - displays now playing movies	
+ movies/latest (protected) - displays the latest movies
// + /credits/:id (public)

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).
bootstrap colours https://www.bitdegree.org/learn/bootstrap-colors 
---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png