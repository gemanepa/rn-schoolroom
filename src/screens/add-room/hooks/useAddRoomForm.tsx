import { useReducer } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { addRoom } from '@store/slices/roomsSlice';
import type { Room } from '@t/business';
import type { AddRoomScreenNavigationProp } from '@t/navigation';
import type { FormStateWithErrors, FormAction } from '@t/add-room-form';

const initialState: FormStateWithErrors = {
  name: '',
  location: '',
  description: '',
  capacity: '',
  roomUsagePolicies: '',
  errors: {
    name: '',
    location: '',
  },
};

function formReducer(state: FormStateWithErrors, action: FormAction): FormStateWithErrors {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          name: '',
          location: '',
        },
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.message,
        },
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: '',
        },
      };
    default:
      return state;
  }
}

export default function useAddRoomForm() {
  const navigation = useNavigation<AddRoomScreenNavigationProp>();
  const [state, dispatch] = useReducer(formReducer, initialState);

  const storeDispatch = useAppDispatch();
  const rooms = useAppSelector((storeState) => storeState.rooms.rooms);

  const validate = (): { field: string; message: string }[] => {
    const errors: { field: string; message: string }[] = [];

    if (!state.name) {
      errors.push({ field: 'name', message: 'Name is required' });
    }
    if (!state.location) {
      errors.push({ field: 'location', message: 'Location is required' });
    }

    return errors;
  };

  const handleSubmit = (): void => {
    const errors = validate();

    if (errors.length === 0) {
      const room: Room = {
        roomId: rooms[rooms.length - 1].roomId + 1,
        createdAt: new Date().toISOString(),
        name: state.name,
        location: state.location,
        description: state.description,
        capacity: state.capacity,
        roomUsagePolicies: state.roomUsagePolicies,
        students: [],
      };
      // Dispatch to Redux
      storeDispatch(addRoom(room));
      navigation.goBack();
    } else {
      // Set errors and prevent submission
      errors.forEach((error) => {
        dispatch({ type: 'SET_ERROR', field: error.field, message: error.message });
      });
    }
  };

  return {
    state,
    dispatch,
    handleSubmit,
  };
}
