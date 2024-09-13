import { useEffect, useRef, useState } from "react"
import { Movie_Entity } from "../../core/entities/movie.entity"
import { moviesNowPlayingUseCase, moviesPopularUseCase, moviesTopRatedUseCase, moviesUpcomingUseCase } from "../../core/use-cases/index";
import { movieDBFetcher } from "../../config/adapters/http/movies.adapter";

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [nowPlaying, setNowPlaying] = useState<Movie_Entity[]>([]);
    const [popular, setPopular] = useState<Movie_Entity[]>([]);
    const [topRated, setTopRated] = useState<Movie_Entity[]>([]);
    const [upcoming, setUpcoming] = useState<Movie_Entity[]>([]);

    let popularMoviesPaginationRef = useRef<number>(1);
    let nowPlayingMoviesPaginationRef = useRef<number>(1);
    let topRatedMoviesPaginationRef = useRef<number>(1);
    let upcomingMoviesPaginationRef = useRef<number>(1);


    useEffect(() => {

        initialLoad();
    }, []);

    const handleNowPlayingMoviesPagination = async () => {   
        nowPlayingMoviesPaginationRef.current = nowPlayingMoviesPaginationRef.current + 1;
        const nowPlayingMovies = await moviesNowPlayingUseCase( movieDBFetcher , { page: nowPlayingMoviesPaginationRef.current });
        setNowPlaying( current => [...current , ...nowPlayingMovies] );
    }
    const handleTopRatedMoviesPagination = async () => {   
        topRatedMoviesPaginationRef.current = topRatedMoviesPaginationRef.current + 1;
        const topRatedMovies = await moviesTopRatedUseCase( movieDBFetcher , { page: topRatedMoviesPaginationRef.current });
        setTopRated( current => [...current , ...topRatedMovies] );
    }
    const handleUpcomingMoviesPagination = async () => {   
        upcomingMoviesPaginationRef.current = upcomingMoviesPaginationRef.current + 1;
        const upcomingMovies = await moviesUpcomingUseCase( movieDBFetcher , { page: upcomingMoviesPaginationRef.current });
        setUpcoming( current => [...current , ...upcomingMovies] );
    }
    const handlePopularMoviesPagination = async () => {   
        popularMoviesPaginationRef.current = popularMoviesPaginationRef.current + 1;
        const popularMovies = await moviesPopularUseCase( movieDBFetcher , { page: popularMoviesPaginationRef.current });
        setPopular( current => [...current , ...popularMovies] );
    }

    const initialLoad = async () => {
        const nowPlayingMoviesPromise = moviesNowPlayingUseCase( movieDBFetcher );
        const upcomingMoviesPromise = moviesUpcomingUseCase( movieDBFetcher );
        const topRatedMoviesPromise = moviesTopRatedUseCase( movieDBFetcher );
        const popularMoviesPromise = moviesPopularUseCase( movieDBFetcher );

        const [
            nowPlayingResponse , 
            upcomingResponse , 
            topRatedResponse , 
            popularResponse  
        ] = await Promise.all([ nowPlayingMoviesPromise , upcomingMoviesPromise , topRatedMoviesPromise , popularMoviesPromise ]);

        setNowPlaying( nowPlayingResponse );
        setPopular( popularResponse );
        setUpcoming( upcomingResponse );
        setTopRated( topRatedResponse );
        setIsLoading( false );
    }
    
    return {
        isLoading,
        nowPlaying, 
        popular,
        topRated,
        upcoming,
        handlePopularMoviesPagination,
        handleNowPlayingMoviesPagination,
        handleTopRatedMoviesPagination,
        handleUpcomingMoviesPagination
    }
}
