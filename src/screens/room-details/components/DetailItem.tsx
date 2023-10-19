import React from 'react';
import { View, Text } from 'react-native';

interface DetailItemProps {
  label: string;
  value: string;
}

function DetailItem({ label, value }: DetailItemProps) {
  return (
    <View className="mb-4">
      <Text className="font-bold text-base mb-1">{label}:</Text>
      <Text className="text-base">{value}</Text>
    </View>
  );
}

export default DetailItem;
