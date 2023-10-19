import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import { List, useTheme } from 'react-native-paper';
import { RoomsOverviewScreenNavigationProp } from '@t/navigation';
import type { Room } from '@t/business';

interface RoomItemProps {
  room: Room;
}

function RoomItem({ room }: RoomItemProps) {
  const theme = useTheme();
  const navigation = useNavigation<RoomsOverviewScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('RoomDetails', room)}
      style={{
        backgroundColor: theme.colors.secondaryContainer,
        borderRadius: 8,
        marginBottom: 12,
      }}
    >
      <List.Item
        key={room.roomId}
        // eslint-disable-next-line react/no-unstable-nested-components
        title={() => <Text className="font-bold text-base pb-1">{room.name}</Text>}
        description={room.location}
        // eslint-disable-next-line react/jsx-props-no-spreading, react/no-unstable-nested-components
        right={(props) => <List.Icon {...props} icon="chevron-right" />}
      />
    </TouchableOpacity>
  );
}

export default RoomItem;
