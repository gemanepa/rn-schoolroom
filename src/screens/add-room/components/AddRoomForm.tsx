import * as React from 'react';
import { View } from 'react-native';
import useAddRoomForm from '../hooks/useAddRoomForm';
import AddRoomTextInput from './AddRoomTextInput';
import AddRoomSubmitBtn from './AddRoomSubmitBtn';

function RoomForm() {
  const { state, dispatch, handleSubmit } = useAddRoomForm();

  const renderTextInput = (
    field: 'name' | 'location' | 'description' | 'capacity' | 'roomUsagePolicies',
    label: string
  ) => <AddRoomTextInput field={field} label={label} state={state} dispatch={dispatch} />;

  return (
    <View>
      {renderTextInput('name', 'Name*')}
      {renderTextInput('location', 'Location*')}
      {renderTextInput('description', 'Description')}
      {renderTextInput('capacity', 'Capacity')}
      {renderTextInput('roomUsagePolicies', 'Room Usage Policies')}
      <AddRoomSubmitBtn handleSubmit={handleSubmit} />
    </View>
  );
}

export default RoomForm;
