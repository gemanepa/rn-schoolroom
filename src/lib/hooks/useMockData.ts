import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { addRooms } from '@store/slices/roomsSlice';
import mock from '@lib/mocks/data.json';
import type { Room } from 'types/business';

const mapMockDataToRooms = (data: Room[]) =>
  data.map(
    ({
      roomId,
      name,
      createdAt,
      students,
      description,
      location,
      capacity,
      roomUsagePolicies,
    }) => ({
      roomId,
      name,
      description,
      location,
      createdAt,
      students,
      capacity,
      roomUsagePolicies,
    })
  );

const useMockData = () => {
  const rooms = useAppSelector((state) => state.rooms.rooms);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (rooms.length > 0) return;

    const mappedData = mapMockDataToRooms(mock as Room[]);
    dispatch(addRooms(mappedData));
  }, [dispatch, rooms]);
};

export default useMockData;
