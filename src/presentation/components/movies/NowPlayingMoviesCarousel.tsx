import { NativeScrollEvent, NativeSyntheticEvent, useWindowDimensions, View } from "react-native";
import { Movie_Entity } from "../../../core/entities/movie.entity"
import { ScrollView } from "react-native-gesture-handler";
import { MovieWallPaper } from "../index";
import { globalStyles } from "../../theme/theme";
import { useRef, useEffect } from "react";

interface Props {
    movies: Movie_Entity[];
    height?: number;
    loadNextPage?: () => void;
}


export const NowPlayingMoviesCarousel = ({
    movies,
    loadNextPage
}: Props) => {
    const dimensions = useWindowDimensions();
    const width = (dimensions.width > dimensions.height) ? dimensions.height * 0.50 : dimensions.width * 0.55;
    const height = (dimensions.width > dimensions.height) ? dimensions.height * 0.60 : dimensions.width * 0.70;

    const isLoading = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 200);
    }, [movies])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        if (isLoading.current) { return; }

        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;

        const isTheEnd = (contentOffset.x + layoutMeasurement.width + 500) >= contentSize.width;

        if (!isTheEnd) { return; }
        isLoading.current = true;
        loadNextPage && loadNextPage();
    }


    return (
        <View style={globalStyles.horizontalCarouselMarginBottom}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={ onScroll }
            >
                {
                    movies.map((movie, index ) => (<MovieWallPaper key={`${movie.id}-${index}`} movie={movie} width={width} height={height} />))
                }
            </ScrollView>
        </View>
    )
}
