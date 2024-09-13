import { NativeScrollEvent, NativeSyntheticEvent, Text, useWindowDimensions, View } from 'react-native';
import { Movie_Entity } from '../../../core/entities/movie.entity'
import { globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native';
import { MovieWallPaper } from './MovieWallPaper';
import { useRef, useEffect } from 'react';


interface Props {
    movies: Movie_Entity[];
    title?: string;
    loadNextPage?: () => void;
}
export const UpcomingMoviesCarousel = ({
    movies,
    title,
    loadNextPage
}: Props) => {

    const dimensions = useWindowDimensions();
    const width  = (dimensions.width > dimensions.height) ? dimensions.height * 0.45 : dimensions.width * 0.30;
    const height = (dimensions.width > dimensions.height) ? dimensions.height * 0.50 : dimensions.width * 0.45;

    const isLoading = useRef( false );

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);
    }, [movies])
    
    const onScroll = ( event: NativeSyntheticEvent<NativeScrollEvent> ) => {

        if( isLoading.current ) { return; }

        const { contentOffset , contentSize , layoutMeasurement } = event.nativeEvent;

        const isTheEnd = ( contentOffset.x + layoutMeasurement.width + 700 ) >= contentSize.width;

        if( !isTheEnd ) { return; }
        isLoading.current = true;
        loadNextPage && loadNextPage();
    }
    return (
        <View style={globalStyles.horizontalCarouselMarginBottom}>
            <Text
                style={globalStyles.horizontalCarouselText}>{title || 'Próximos estrenos'}
            </Text>

            <FlatList
                data={ movies }
                renderItem={ ({item}) => ( <MovieWallPaper movie={ item } width={width} height={height} /> ) }
                keyExtractor={ (item , index ) => `${item.id}-${index}` }
                horizontal
                showsHorizontalScrollIndicator={ false }
                onScroll={ onScroll }/>
        </View>
    )
}
