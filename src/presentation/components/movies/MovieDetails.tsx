import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { Formatter } from '../../../config/helpers/formatter';
import { Casting_Entitity } from '../../../core/entities/movie.entity';
import { FlatList } from 'react-native-gesture-handler';
import { Actors } from '../casting/Actors';

interface Props {
    description:    string;
    budget:         number;
    casting:        Casting_Entitity[];
}

export const MovieDetails = ({
    description,
    budget,
    casting
}: Props) => {
    return (
        <>
            <View style={ globalStyles.movieDetailsContainer }>

                <Text style={ globalStyles.movieDetailsTitles }>Historia</Text>
                <Text style={ globalStyles.movieDetailsHistory }>{ description }</Text>
                <Text style={ globalStyles.movieDetailsTitles }>Presupuesto</Text>
                <Text style={ globalStyles.movieDetailsBudget }>{ Formatter.currency( budget ) }</Text>
            </View>

            <View style={ globalStyles.movieDetailsCastingContainer }>
                <Text style={ globalStyles.movieDetailsCastingText }>Actores</Text>
                <FlatList 
                    data={ casting }
                    renderItem={ ( {item} ) => (<Actors actor={ item }/>) }
                    keyExtractor={ ( item , index ) => `${item.id}-${index}` }
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                />
            </View>


        </>
    )
}
