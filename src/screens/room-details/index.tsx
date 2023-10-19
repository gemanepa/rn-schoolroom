import { ScrollView } from 'react-native';
import useNavigationHeader from '@lib/hooks/useNavigationHeader';
import type { Room } from '@t/business';
import { useAppSelector } from '@store/hooks';
import Details from './components/Details';
import AddStudentBtn from './components/AddStudentBtn';

function RoomDetailsScreen({ route }: { route: { params: Room } }) {
  useNavigationHeader({ title: 'Room Details', goBack: true });
  const room =
    useAppSelector((state) => state.rooms.rooms).find(
      (roomItem) => roomItem.roomId === route.params.roomId
    ) || route.params;

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      className="flex-1 bg-white"
    >
      <Details room={room} />

      <AddStudentBtn room={room} />
    </ScrollView>
  );
}

export default RoomDetailsScreen;
