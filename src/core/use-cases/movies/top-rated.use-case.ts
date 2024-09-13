import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { TopRatedResponse } from "../../../infrastructure/interfaces/movie-db.-responses.model";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie_Entity } from "../../entities/movie.entity";

interface Options {
    page?:      number;
    limit?:     number;
}

export const moviesTopRatedUseCase = async ( fetcher: HttpAdapter , options?: Options): Promise<Movie_Entity[]> => {

    try {
        const topRated = fetcher.get<TopRatedResponse>('/top_rated',{
            params: {
                page: options?.page ?? 1
            }
        });
        
        return (await topRated).results.map(( element ) => MovieMapper.fromMovieDBResultToEntity( element ));
        
    } catch (error) {
        throw new Error('Error fetching movies - Top rated use case');
    }
}