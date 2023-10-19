import * as React from 'react';
import { Button } from 'react-native-paper';

function AddRoomSubmitBtn({ handleSubmit }: { handleSubmit: () => void }) {
  return (
    <Button mode="contained" onPress={() => handleSubmit()}>
      Submit
    </Button>
  );
}

export default AddRoomSubmitBtn;
