// Define a type for the student object
export type Student = {
  id: string;
  name: string;
  age: number;
  gender: string;
  createdAt: string;
};

// Define a type for the room object
export type Room = {
  roomId: number;
  name: string;
  description: string;
  location: string;
  createdAt: string;
  students: Student[];
  capacity: string;
  roomUsagePolicies: string;
};
