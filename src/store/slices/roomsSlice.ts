import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@store/index';
import type { Room, Student } from 'types/business';

// Define the slice state
type RoomsState = {
  rooms: Room[];
};

const initialState: RoomsState = {
  rooms: [],
};

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    addRooms: (state, action: PayloadAction<Room[]>) => {
      state.rooms.push(...action.payload);
    },
    addRoom: (state, action: PayloadAction<Room>) => {
      state.rooms.push(action.payload);
    },
    removeRoom: (state, action: PayloadAction<number>) => ({
      ...state,
      rooms: state.rooms.filter((room) => room.roomId !== action.payload),
    }),
    addStudentToRoom: (state, action: PayloadAction<{ roomId: number; student: Student }>) => {
      const roomIndex = state.rooms.findIndex((r) => r.roomId === action.payload.roomId);
      if (roomIndex) {
        state.rooms[roomIndex].students.push(action.payload.student);
        // alert(JSON.stringify(state.rooms[roomIndex].students));
      }
    },
    removeStudentFromRoom: (
      state,
      action: PayloadAction<{ roomId: number; studentId: string }>
    ) => {
      const room = state.rooms.find((r) => r.roomId === action.payload.roomId);
      if (room) {
        room.students = room.students.filter((student) => student.id !== action.payload.studentId);
      }
    },
  },
});

export const { addRooms, addRoom, removeRoom, addStudentToRoom, removeStudentFromRoom } =
  roomsSlice.actions;

export const selectRooms = (state: RootState) => state.rooms.rooms;

export default roomsSlice.reducer;
