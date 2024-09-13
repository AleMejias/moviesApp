import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularResponse } from "../../../infrastructure/interfaces/movie-db.-responses.model";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie_Entity } from "../../entities/movie.entity";

interface Options {
    page?:      number;
    limit?:     number;
}


export const moviesPopularUseCase = async ( fetcher: HttpAdapter , options?: Options ): Promise<Movie_Entity[]> => {

    try {
        const popular = fetcher.get<PopularResponse>('/popular',{
            params: {
                page: options?.page ?? 1
            }
        });
        
        return (await popular).results.map(( element ) => MovieMapper.fromMovieDBResultToEntity( element ));
        
    } catch (error) {
        throw new Error('Error fetching movies - Popular use case');
        
    }
}