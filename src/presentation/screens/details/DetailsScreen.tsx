
import { StackScreenProps } from '@react-navigation/stack';
import { ScrollView } from 'react-native';
import { RootStackNavigationProps } from '../../navigation/stack/StackNavigation';
import { useMovie } from '../../hooks/useMovie';
import { FullScreenLoader, MovieDetails, MovieHeader } from '../../components';

interface Props extends StackScreenProps<RootStackNavigationProps , 'Details'>{};

export const DetailsScreen = ({ route }: Props) => {
  
    const { movieId } = route.params;
    const { movie , casting ,isLoading } = useMovie(movieId);  
    
    if( isLoading ) {  return <FullScreenLoader /> }

    return (
        <ScrollView>
            <MovieHeader originalTitle={ movie!.originalTitle } poster={ movie!.poster } rating={movie!.rating} genres={movie!.genres}/>
            <MovieDetails 
                description={ movie!.description } 
                budget={ movie!.budget }
                casting={ casting }/>
        </ScrollView>
    )
}

