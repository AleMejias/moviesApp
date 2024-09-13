import { useEffect, useState } from "react"
import { Casting_Entitity, FullMovie } from "../../core/entities/movie.entity";
import { movieDBFetcher } from "../../config/adapters/http/movies.adapter";
import { movieByIdUseCase, movieCastingUseCase } from "../../core/use-cases";

export const useMovie = (movieId: number) => {

    const [isLoading, setiIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>();
    const [casting, setCasting] = useState<Casting_Entitity[]>([]);

    useEffect(() => {

        loadMovie();

    }, [movieId])


    const loadMovie = async () => {
        setiIsLoading( true );
        const fullMovieRequest = movieByIdUseCase(movieDBFetcher, movieId);
        const castingRequest = movieCastingUseCase( movieDBFetcher, movieId );

        const [ fullMovieResponse , castingResponse ] = await Promise.all([fullMovieRequest , castingRequest]);
        setMovie( fullMovieResponse );
        setCasting( castingResponse );
        setiIsLoading( false );
    }


    return {
        isLoading,
        movie,
        casting
    }

}
