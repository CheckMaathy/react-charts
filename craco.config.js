const path = require("path");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.path.json");

module.exports = {
    webpack: {
        alias: {
            "@assets": path.resolve(__dirname, "src/assets"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@components": path.resolve(__dirname, "src/components"),
            "@routes": path.resolve(__dirname, "src/routes"),
            "@data": path.resolve(__dirname, "src/data"),
            "@constants": path.resolve(__dirname, "src/constants"),
            "@context": path.resolve(__dirname, "src/context"),
            "@model": path.resolve(__dirname, "src/model"),
            "@infra": path.resolve(__dirname, "src/infra"),
            "@hook": path.resolve(__dirname, "src/hook"),
            "@service": path.resolve(__dirname, "src/service"),
        },
    },
    jest: {
        configure: {
            preset: "ts-jest",
            moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
                prefix: "<rootDir>/src/",
            }),
        },
    },
};
