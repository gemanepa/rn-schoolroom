import React from 'react';
import { View, ScrollView } from 'react-native';
import { TextInput, Text, Button, RadioButton, useTheme } from 'react-native-paper';
import type { Room } from '@t/business';
import useAddStudentForm from '../hooks/useAddStudentForm';

function StudentForm({ room }: { room: Room }) {
  const theme = useTheme();
  const { formState, validationErrors, handleChange, handleSubmit } = useAddStudentForm({ room });

  const renderTextInput = (field: 'studentId' | 'name' | 'age' | 'gender', label: string) => (
    <>
      <TextInput
        label={label}
        value={formState[field]}
        onChangeText={(text) => handleChange(field, text)}
        error={Boolean(validationErrors[field])}
        className="mt-4"
      />
      <Text className="text-red-600 mt-2 mb-2">{validationErrors[field] || ''}</Text>
    </>
  );

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        padding: 16,
        paddingTop: 32,
      }}
    >
      {renderTextInput('studentId', 'Student ID')}
      {renderTextInput('name', 'Name')}
      {renderTextInput('age', 'Age')}

      <Text className="text-base font-bold mb-2 mt-2">Gender</Text>
      <View className="flex-row justify-between items-center mb-4 gap-2">
        {['Male', 'Female', 'Other'].map((gender) => (
          <RadioButton.Item
            key={gender}
            label={gender}
            value={gender}
            status={formState.gender === gender ? 'checked' : 'unchecked'}
            onPress={() => handleChange('gender', gender)}
            style={{ backgroundColor: theme.colors.secondaryContainer, borderRadius: 8 }}
          />
        ))}
      </View>

      <Button mode="contained" onPress={handleSubmit} className="mt-7">
        Submit
      </Button>
    </ScrollView>
  );
}

export default StudentForm;
