export default {
  bail: false,
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.ts"
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/fileTransformer.js"
  },
  
  transformIgnorePatterns: [
    "/node_modules/",
    "antd.css",
    "antd\\.css",
    "/node_modules/(?!antd)/",
    "antd/dist/antd.css",
  ],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        "outputDirectory": "<rootDir>/testResults/",
        "outputName": "react-junit.xml"
      }
    ]
  ],
  silent: true
};