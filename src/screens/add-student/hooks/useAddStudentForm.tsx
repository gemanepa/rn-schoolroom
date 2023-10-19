import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '@store/hooks';
import { addStudentToRoom } from '@store/slices/roomsSlice';
import type { AddStudentScreenNavigationProp } from '@t/navigation';
import type { Room } from '@t/business';

interface StudentFormState {
  studentId: string;
  name: string;
  age: string;
  gender: string;
}

interface ValidationErrors {
  studentId: string | null;
  name: string | null;
  age: string | null;
  gender: string | null;
}

const useStudentForm = ({ room }: { room: Room }) => {
  const navigation = useNavigation<AddStudentScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const [formState, setFormState] = useState<StudentFormState>({
    studentId: '',
    name: '',
    age: '',
    gender: '',
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    studentId: null,
    name: null,
    age: null,
    gender: null,
  });

  const validateForm = () => {
    const errors: ValidationErrors = {
      studentId: !formState.studentId ? 'Student ID is required' : null,
      name: !formState.name ? 'Name is required' : null,
      age: !formState.age ? 'Age is required' : null,
      gender: !formState.gender ? 'Gender is required' : null,
    };

    if (!errors.studentId) {
      const studentIdAlreadyInRoom = room.students.some(
        (student) => student.id === formState.studentId
      );
      if (studentIdAlreadyInRoom) {
        errors.studentId = 'Student ID already exists in Room';
      }
    }

    setValidationErrors(errors);

    return !Object.values(errors).some((error) => !!error);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Add student to room
      const student = {
        id: formState.studentId,
        createdAt: new Date().toISOString(),
        name: formState.name,
        age: Number(formState.age),
        gender: formState.gender,
      };
      dispatch(addStudentToRoom({ roomId: room.roomId, student }));
      navigation.goBack();
    }
  };

  return {
    formState,
    validationErrors,
    handleChange: (field: keyof StudentFormState, value: string) => {
      setValidationErrors({
        studentId: null,
        name: null,
        age: null,
        gender: null,
      });
      setFormState({ ...formState, [field]: value });
    },
    handleSubmit,
  };
};

export default useStudentForm;
