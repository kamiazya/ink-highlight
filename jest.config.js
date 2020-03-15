module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  snapshotSerializers: ['jest-snapshot-serializer-raw'],
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },
};
