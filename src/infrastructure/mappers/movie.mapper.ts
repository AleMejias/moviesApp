import { Casting_Entitity, FullMovie, Movie_Entity } from "../../core/entities/movie.entity";
import { MovieByIDResponse, MovieDBCast, Result } from "../interfaces/movie-db.-responses.model";

export class MovieMapper {

    static fromMovieDBResultToEntity( result: Result ): Movie_Entity {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date( result.release_date ),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
            backdrop:`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`       }
    }
    static fromMovieDBByIdToFullMovie( result: MovieByIDResponse ): FullMovie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date( result.release_date ),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
            backdrop:`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`,
            budget: result.budget,
            duration: result.runtime,
            genres: result.genres.map(( genre ) => genre.name),
            originalTitle: result.original_title,
            productionCompanies: result.production_companies.map(( company ) => company.name)
        }
    }
    static movieCasting( result: MovieDBCast ): Casting_Entitity {
        return {
            id: result.id,
            name: result.name,
            character: result.character || 'No disponible',
            avatar: result.profile_path ? `https://image.tmdb.org/t/p/w500/${result.profile_path}` : 'https://i.stack.imgur.com/l60Hf.png'
        }
    }



}