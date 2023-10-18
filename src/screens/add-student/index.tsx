import { StyleSheet, View, Text, Button } from 'react-native';
import Counter from '@features/counter/components/Counter';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 150,
  },
});

type AddStudentScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddStudent'>;

function AddStudentScreen() {
  const navigation = useNavigation<AddStudentScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>Add Student Screen</Text>
      <Counter />
      <Button title="Go to Room Details" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default AddStudentScreen;
