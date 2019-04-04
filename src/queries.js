import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    query{
        movies(limit:50, rating:7.0){
            id
            title
            rating
            medium_cover_image
        }
    }
`;

export const MOVIE_DETAILS = gql`
query getMovieDetails($movieId: Int!){
    movie(id: $movieId){
        medium_cover_image
        title
        rating
    }
}`;