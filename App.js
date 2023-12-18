import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import List from './screen/List';
import Detail from './screen/Detail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="list" component={List}  />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
