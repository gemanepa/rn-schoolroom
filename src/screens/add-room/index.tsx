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

type AddRoomScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddRoom'>;

function AddRoomScreen() {
  const navigation = useNavigation<AddRoomScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>Add Room Screen</Text>
      <Counter />
      <Button title="Go to Rooms Overview" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default AddRoomScreen;
