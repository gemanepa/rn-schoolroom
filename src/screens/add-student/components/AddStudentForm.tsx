import React from 'react';
import { ScrollView } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import type { Room } from '@t/business';
import useAddStudentForm from '../hooks/useAddStudentForm';
import GenderSection from './GenderSection';

function StudentForm({ room }: { room: Room }) {
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

      <GenderSection genderState={formState.gender} handleChange={handleChange} />
      <Button mode="contained" onPress={handleSubmit} className="mt-7">
        Submit
      </Button>
    </ScrollView>
  );
}

export default StudentForm;
