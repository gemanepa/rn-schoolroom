import React from 'react';
import { View } from 'react-native';
import { Text, RadioButton, useTheme } from 'react-native-paper';

type Props = {
  genderState: string;
  handleChange: (arg0: 'gender', arg1: string) => void;
};

function GenderSection({ genderState, handleChange }: Props) {
  const theme = useTheme();

  return (
    <>
      <Text className="text-base font-bold mb-2 mt-2">Gender</Text>
      <View className="flex-row justify-between items-center mb-4 gap-2">
        {['Male', 'Female', 'Other'].map((gender) => (
          <RadioButton.Item
            key={gender}
            label={gender}
            value={gender}
            status={genderState === gender ? 'checked' : 'unchecked'}
            onPress={() => handleChange('gender', gender)}
            style={{ backgroundColor: theme.colors.secondaryContainer, borderRadius: 8 }}
          />
        ))}
      </View>
    </>
  );
}

export default GenderSection;
