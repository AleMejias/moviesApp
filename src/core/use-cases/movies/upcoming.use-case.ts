import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { UpcomingResponse } from "../../../infrastructure/interfaces/movie-db.-responses.model";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie_Entity } from "../../entities/movie.entity";

interface Options {
    page?:      number;
    limit?:     number;
}

export const moviesUpcomingUseCase = async ( fetcher: HttpAdapter , options?: Options ): Promise<Movie_Entity[]> => {

    try {
        const upcoming = fetcher.get<UpcomingResponse>('/upcoming',{
            params: {
                page: options?.page ?? 1
            }
        });
        
        return (await upcoming).results.map(( element ) => MovieMapper.fromMovieDBResultToEntity( element ));
        
    } catch (error) {
        throw new Error('Error fetching movies - Upcoming use case');
    }
}