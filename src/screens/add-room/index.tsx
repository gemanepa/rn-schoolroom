import { View } from 'react-native';
import useNavigationHeader from '@lib/hooks/useNavigationHeader';
import AddRoomForm from './components/AddRoomForm';

function AddRoomScreen() {
  useNavigationHeader({ title: 'Add new room', goBack: true });

  return (
    <View className="flex-1 pt-8 pl-5 pr-5 bg-white">
      <AddRoomForm />
    </View>
  );
}

export default AddRoomScreen;
