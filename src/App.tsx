import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from './presentation/navigation/stack/StackNavigation';
;export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
