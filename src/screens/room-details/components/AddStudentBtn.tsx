import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RoomDetailsScreenNavigationProp } from '@t/navigation';
import type { Room } from '@t/business';

function AddStudentBtn({ room }: { room: Room }) {
  const navigation = useNavigation<RoomDetailsScreenNavigationProp>();
  return (
    <View className="pb-8">
      <Button icon="plus" mode="contained" onPress={() => navigation.navigate('AddStudent', room)}>
        Add Student
      </Button>
    </View>
  );
}

export default AddStudentBtn;
