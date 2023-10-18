import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { store } from '@store';
import Counter from '@features/counter/components/Counter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Counter />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
