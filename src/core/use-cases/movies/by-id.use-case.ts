import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieByIDResponse } from "../../../infrastructure/interfaces/movie-db.-responses.model";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";


export const movieByIdUseCase = async ( fetcher: HttpAdapter , movieId: number ): Promise<FullMovie> => {

    try {
        const movie = await fetcher.get<MovieByIDResponse>(`${movieId}`);
        const fullMovie = MovieMapper.fromMovieDBByIdToFullMovie( movie );
        return fullMovie;
        
    } catch (error) {
        throw new Error(`Error fetching movies - Movies BY ID ${movieId}`);
    }
}