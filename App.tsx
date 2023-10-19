import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { store } from '@store/index';
import useMockData from '@lib/hooks/useMockData';
import Navigation from '@screens/index';

function App() {
  useMockData();
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <Navigation />
    </PaperProvider>
  );
}

function StoreProvider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default StoreProvider;
