module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['./tests/setup.js'],
  moduleNameMapper: {
    '@store/(.*)': '<rootDir>/src/store/$1',
    '@lib/(.*)': '<rootDir>/src/lib/$1',
    '@features/(.*)': '<rootDir>/src/features/$1',
    '@screens/(.*)': '<rootDir>/src/screens/$1',
    '@t/(.*)': '<rootDir>/types/$1',
  },
};
