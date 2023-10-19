import { View } from 'react-native';
import useNavigationHeader from '@lib/hooks/useNavigationHeader';
import type { Room } from '@t/business';
import AddStudentForm from './components/AddStudentForm';

function AddStudentScreen({ route }: { route: { params: Room } }) {
  useNavigationHeader({ title: 'Add new student', goBack: true });

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <AddStudentForm room={route.params} />
    </View>
  );
}

export default AddStudentScreen;
