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

type RoomsOverviewScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RoomsOverview'
>;

function RoomsOverviewScreen() {
  const navigation = useNavigation<RoomsOverviewScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <Text>Rooms Overview</Text>
      <Counter />
      <Button title="Go to New Room" onPress={() => navigation.navigate('AddRoom')} />
    </View>
  );
}

export default RoomsOverviewScreen;
