import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RoomsOverviewScreenNavigationProp } from '@t/navigation';

function AddRoomBtn() {
  const navigation = useNavigation<RoomsOverviewScreenNavigationProp>();
  return (
    <View className="pt-8 pb-5 pr-4 flex-row justify-end">
      <Button icon="plus" mode="contained" onPress={() => navigation.navigate('AddRoom')}>
        Add Room
      </Button>
    </View>
  );
}

export default AddRoomBtn;
