import React from 'react';
import { FlatList } from 'react-native';
import { useAppSelector } from '@store/hooks';
import RoomItem from './RoomItem'; // Import the custom RoomItem component

function RoomsList() {
  const rooms = useAppSelector((state) => state.rooms.rooms);

  return (
    <FlatList
      data={rooms}
      renderItem={({ item }) => <RoomItem room={item} />}
      keyExtractor={(item) => item.roomId.toString()}
    />
  );
}

export default RoomsList;
