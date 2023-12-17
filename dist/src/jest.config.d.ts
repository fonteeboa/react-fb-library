declare const _default: {
    bail: boolean;
    verbose: boolean;
    clearMocks: boolean;
    collectCoverage: boolean;
    coverageDirectory: string;
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': string;
        '\\.(css|less|scss|sass)$': string;
    };
    preset: string;
    setupFilesAfterEnv: string[];
    testEnvironment: string;
    testMatch: string[];
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": string;
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": string;
    };
    transformIgnorePatterns: string[];
    reporters: (string | (string | {
        outputDirectory: string;
        outputName: string;
    })[])[];
    silent: boolean;
};
export default _default;
