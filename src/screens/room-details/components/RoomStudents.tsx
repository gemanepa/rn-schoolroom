import React from 'react';
import { View, Text } from 'react-native';
import type { Room } from '@t/business';

function RoomStudents({ students }: { students: Room['students'] }) {
  return (
    <View className="mb-1">
      <Text className="mb-1 text-base font-bold">Students:</Text>
      <View className="ml-4">
        {students.map((student) => (
          <View key={JSON.stringify(student)} className="mb-2">
            <Text>
              <Text className="font-bold">{student.name}</Text>
              {`, Age: ${student.age}, Gender: ${student.gender}`}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default RoomStudents;
