import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { Room } from './business';

export type RootStackParamList = {
  RoomsOverview: undefined;
  RoomDetails: Room;
  AddRoom: undefined;
  AddStudent: Room;
};

export type RoomsOverviewScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RoomsOverview'
>;

export type AddRoomScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddRoom'>;

export type RoomDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RoomDetails'
>;

export type AddStudentScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddStudent'
>;
