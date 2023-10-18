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

type RoomDetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RoomDetails'>;

function RoomDetailsScreen() {
  const navigation = useNavigation<RoomDetailsScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>Add Student Screen</Text>
      <Counter />
      <Button title="Back to Rooms Overview" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default RoomDetailsScreen;
