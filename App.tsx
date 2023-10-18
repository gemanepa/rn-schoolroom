import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from '@store';
import { NavigationContainer } from '@react-navigation/native';
import RoomsOverviewScreen from '@screens/rooms-overview';
import AddRoomScreen from '@screens/add-room';

export type RootStackParamList = {
  RoomsOverview: undefined;
  RoomDetails: undefined;
  AddRoom: undefined;
  AddStudent: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="RoomsOverview"
            component={RoomsOverviewScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="AddRoom" component={AddRoomScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
