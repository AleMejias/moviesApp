import { Image, Pressable, Text, useWindowDimensions, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../theme/theme";

interface Props {
    poster: string;
    originalTitle: string;
    rating:     number;
    genres:         string[];
}


export const MovieHeader = ({
    poster,
    originalTitle,
    rating,
    genres
}: Props) => {

    const dimensions = useWindowDimensions();
    const navigation = useNavigation();
    const rotated = (dimensions.width > dimensions.height);
    const height = rotated ? dimensions.height * 0.85 : dimensions.width;
    return (
        <>
            <View style={{ 
                ...globalStyles.headerContainer,
                flexDirection: rotated ? 'row' : 'column',
                height
                }}>
                <View
                    style={{
                        ...globalStyles.movieHeaderImageContainer,
                        flex: rotated ? 6 : 10
                    }}
                >
                    <View style={globalStyles.movieHeaderImageBorder}>
                        <Image
                            style={globalStyles.movieHeaderPosterImage}
                            source={{ uri: poster }} />
                    </View>

                </View>
                <View style={{
                    ...globalStyles.headerMovieTitleContainer,
                        flex: rotated ? 7 : 2,
                        paddingTop: rotated ? 10 : 0
                    }}>
                    <View style={globalStyles.movieHeaderMarginContainer}>
                        <Text style={globalStyles.movieHeaderTitle}>{originalTitle}</Text>
                    </View>
                    <View style={globalStyles.movieDetailsRow}>
                        <Text>{rating.toFixed(1)}</Text>
                        <Text style={globalStyles.movieDetailsGenres}>{genres.join(', ')}.</Text>
                    </View>

                </View>

            </View>

            <View style={globalStyles.movieHeaderBackButton}>
                <Pressable
                    onPress={() => navigation.goBack()}>
                    <Text style={globalStyles.movieHeaderBackButtonText}>Back</Text>
                </Pressable>
            </View>

        </>
    )
}
