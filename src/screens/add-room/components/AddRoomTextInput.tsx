import * as React from 'react';
import { TextInput } from 'react-native-paper';
import type { FormTextInputProps } from '@t/add-room-form';

function AddRoomTextInput({ field, label, state, dispatch }: FormTextInputProps) {
  const hasError = () => {
    if (field === 'name' || field === 'location') {
      return Boolean(state.errors[field]);
    }
    return false;
  };

  return (
    <TextInput
      className="mb-8"
      label={label}
      value={state[field]}
      onChangeText={(text) => dispatch({ type: 'CHANGE', field, value: text })}
      error={hasError()}
    />
  );
}

export default AddRoomTextInput;
