module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@app': '/src/app',
          '@entities': './src/entities',
          '@screens': './src/screens',
          '@shared': './src/shared',
        },
      },
    ],
  ],
};
