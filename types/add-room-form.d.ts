import React from 'react';

interface FormState {
  name: string;
  location: string;
  description: string;
  capacity: string;
  roomUsagePolicies: string;
}

interface FormStateErrors {
  name: string;
  location: string;
}

export interface FormStateWithErrors extends FormState {
  errors: FormStateErrors;
}

export type FormAction =
  | { type: 'CHANGE'; field: string; value: string }
  | { type: 'SET_ERROR'; field: string; message: string }
  | { type: 'CLEAR_ERROR'; field: string };

export type FormTextInputProps = {
  field: keyof FormState;
  label: string;
  state: FormStateWithErrors;
  dispatch: React.Dispatch<FormAction>;
};
