import React from 'react';
import { View } from 'react-native';
import { formatIsoDate } from '@lib/utils/date';
import type { Room } from '@t/business';
import DetailItem from './DetailItem';
import RoomStudents from './RoomStudents';

function RoomDetails({ room }: { room: Room }) {
  const { name, description, location, roomId, createdAt, capacity, roomUsagePolicies, students } =
    room;

  const roomItems = (
    <>
      <DetailItem label="Name" value={name} />
      <DetailItem label="Description" value={description} />
      <DetailItem label="Location" value={location} />
      <DetailItem label="Room ID" value={roomId.toString()} />
      <DetailItem label="Created At" value={formatIsoDate(createdAt)} />
      <DetailItem label="Capacity" value={capacity} />
      <DetailItem label="Room Usage Policies" value={roomUsagePolicies} />
    </>
  );

  return (
    <View className="p-4 pb-2 pt-6 w-[350px]">
      {roomItems}
      <RoomStudents students={students} />
    </View>
  );
}

export default RoomDetails;
