export interface Movie_Entity {
    id:             number;
    title:          string;
    description:    string;
    releaseDate:    Date;
    rating:         number;
    poster:         string;
    backdrop:       string;
}

export interface FullMovie extends Movie_Entity{
    genres:                 string[];
    duration:               number;
    budget:                 number;
    originalTitle:          string;
    productionCompanies:    string[];

    
}

export interface Casting_Entitity {
    id:         number;
    name:       string;
    character:  string;
    avatar:     string;
}