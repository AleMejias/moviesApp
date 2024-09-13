import { Image, Text, View } from "react-native";
import { Casting_Entitity } from "../../../core/entities/movie.entity"
import { globalStyles } from "../../theme/theme";

interface Props {
    actor: Casting_Entitity;
}


export const Actors = ({
    actor
}: Props) => {
    return (
        <View style={globalStyles.actorsContainer}>
            <Image
                source={{ uri: actor.avatar }}
                style={globalStyles.actorImage} />

            <View style={ globalStyles.actorInfoContainer }>
                <Text style={ globalStyles.actorNameText }>{ actor.name }</Text>
                <Text style={ globalStyles.actorCharacterText }>{ actor.character }</Text>
            </View>
        </View>
    );
}
