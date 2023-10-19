module.exports = function configureBabel(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@store/*': './src/store/*',
            '@lib/*': './src/lib/*',
            '@features/*': './src/features/*',
            '@screens/*': './src/screens/*',
            '@t/*': './types/*',
          },
        },
      ],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
