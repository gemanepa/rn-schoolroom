import { useEffect } from 'react';
import { Platform } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function useNavigationHeader({ title, goBack }: { title: string; goBack: boolean }) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title,
      headerLeft: () =>
        goBack ? (
          <IconButton
            style={{
              paddingBottom: Platform.OS === 'ios' ? 5 : 0,
            }}
            onPress={() => navigation.goBack()}
            icon="chevron-left"
            size={20}
          />
        ) : null,
    });
  }, [navigation, title, goBack]);
}

export default useNavigationHeader;
