import { Image, Pressable, View } from "react-native"
import { Movie_Entity } from "../../../core/entities/movie.entity"
import { globalStyles } from "../../theme/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackNavigationProps } from "../../navigation/stack/StackNavigation";

interface Props {
    movie:  Movie_Entity;
    width:  number;
    height: number;
}


export const MovieWallPaper = ({
    movie,
    height,
    width
}: Props) => {

    const navigation = useNavigation<NavigationProp<RootStackNavigationProps>>();
    return (
        <Pressable
            onPress={() => navigation.navigate("Details" , { movieId: movie.id }) }
            style={ ({ pressed }) => ({
                width,
                height,
                marginHorizontal: 3,
                paddingBottom: 20,
                paddingHorizontal: 5,
                opacity: pressed ? 0.9 : 1
            })}>
            <View
                style={{ ...globalStyles.movieWallPaperImageContainer, width: '100%', height: '100%' }}>
                <Image
                    style={{...globalStyles.movieWallPaperImage , objectFit: "fill"}}
                    source={{ uri: movie.poster }} />
            </View>

        </Pressable>
    )
}
