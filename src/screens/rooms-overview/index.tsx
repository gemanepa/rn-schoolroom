import { View } from 'react-native';
import useNavigationHeader from '@lib/hooks/useNavigationHeader';
import RoomsList from './components/RoomsList';
import AddRoomBtn from './components/AddRoomBtn';

function RoomsOverviewScreen() {
  useNavigationHeader({ title: 'Rooms Overview', goBack: false });

  return (
    <View className="flex-1 bg-white">
      <AddRoomBtn />
      <View className="flex-1 items-center pb-8">
        <RoomsList />
      </View>
    </View>
  );
}

export default RoomsOverviewScreen;
