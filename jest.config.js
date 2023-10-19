module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|jsx|html|svg)$': 'ts-jest',
  },
};