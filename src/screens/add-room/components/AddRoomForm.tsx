import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import useAddRoomForm from '../hooks/useAddRoomForm';
import AddRoomTextInput from './AddRoomTextInput';

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
      <Button mode="contained" onPress={() => handleSubmit()}>
        Submit
      </Button>
    </View>
  );
}

export default RoomForm;
