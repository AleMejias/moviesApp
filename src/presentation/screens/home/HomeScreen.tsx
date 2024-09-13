import React from 'react'
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../../theme/theme';
import { FullScreenLoader, NowPlayingMoviesCarousel, PopularMoviesCarousel, TopRatedMoviesCarousel , UpcomingMoviesCarousel } from '../../components/index';

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const { 
        isLoading , 
        nowPlaying , 
        popular , 
        topRated , 
        upcoming ,
        handlePopularMoviesPagination , 
        handleNowPlayingMoviesPagination,
        handleTopRatedMoviesPagination,
        handleUpcomingMoviesPagination } = useMovies();


    if( isLoading ) {  return <FullScreenLoader /> }

    return (
        <ScrollView>
            <View
                style={{
                    marginTop: top + globalStyles.homeScreenContainer.paddingTop
                }}
            >
                
                <NowPlayingMoviesCarousel movies={ nowPlaying } loadNextPage={ handleNowPlayingMoviesPagination }/> 
                <PopularMoviesCarousel movies={ popular } title='Populares' loadNextPage={ handlePopularMoviesPagination }/>   
                <TopRatedMoviesCarousel movies={ topRated } title='Mejor calificadas' loadNextPage={ handleTopRatedMoviesPagination } />   
                <UpcomingMoviesCarousel movies={ upcoming } title='Próximamente' loadNextPage={ handleUpcomingMoviesPagination } />   
            </View>
        </ScrollView>
    )
}
