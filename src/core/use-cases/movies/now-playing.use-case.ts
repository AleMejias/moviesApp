import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interfaces/movie-db.-responses.model";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie_Entity } from "../../entities/movie.entity";

interface Options {
    page?:      number;
    limit?:     number;
}


export const moviesNowPlayingUseCase = async ( fetcher: HttpAdapter , options?: Options ): Promise<Movie_Entity[]> => {

    try {
        const nowPlaying = fetcher.get<NowPlayingResponse>('/now_playing',{
            params: {
                page: options?.page ?? 1
            }
        });
        
        return (await nowPlaying).results.map(( element ) => MovieMapper.fromMovieDBResultToEntity( element ));
        
    } catch (error) {
        throw new Error('Error fetching movies - Now Playing use case');
    }
}