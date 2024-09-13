import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieCastingDBResponse } from "../../../infrastructure/interfaces/movie-db.-responses.model";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Casting_Entitity } from "../../entities/movie.entity";


export const movieCastingUseCase = async ( fetcher: HttpAdapter , movieId: number ): Promise<Casting_Entitity[]> => {

    try {
        const { cast } = await fetcher.get<MovieCastingDBResponse>(`${movieId}/credits`);
        const actors =  cast.map(( actor ) => MovieMapper.movieCasting( actor ) );
        return actors;
        
    } catch (error) {
        throw new Error(`Error fetching movies - Movies Casting: ${movieId}`);
    }
}