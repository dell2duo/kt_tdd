import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home/Home';
import { theme } from '../shared/theme/theme';
import { IBook } from '../shared/interfaces/IBook';
import BookDetails from '../pages/BookDetails/BookDetails';

export type TRootStackPagesParams = {
  Home: undefined;
  BookDetails: { book: IBook };
};

const Stack = createNativeStackNavigator<TRootStackPagesParams>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{
            contentStyle: { backgroundColor: theme.colors.homeBackground },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            contentStyle: { backgroundColor: theme.colors.homeBackground },
          }}
          name="BookDetails"
          component={BookDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
