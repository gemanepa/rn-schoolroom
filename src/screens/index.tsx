import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AddStudentScreen from '@screens/add-student';
import AddRoomScreen from '@screens/add-room';
import RoomDetailsScreen from '@screens/room-details';
import RoomsOverviewScreen from '@screens/rooms-overview';

import type { RootStackParamList } from '@t/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RoomsOverview" component={RoomsOverviewScreen} />
        <Stack.Screen name="RoomDetails" component={RoomDetailsScreen} />
        <Stack.Screen name="AddRoom" component={AddRoomScreen} />
        <Stack.Screen name="AddStudent" component={AddStudentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
