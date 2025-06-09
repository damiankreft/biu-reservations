// prettier.config.ts, .prettierrc.ts, prettier.config.mts, or .prettierrc.mts

import { type Config } from "prettier";

const config: Config = {
    trailingComma: "none",
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    plugins: ["prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: "*.md",
            options: {
                tabWidth: 2,
                proseWrap: "always",
            },
        },
        {
            files: "*.json",
            options: {
                tabWidth: 2,
            },
        },
        {
            files: "*.ts",
            options: {
                parser: "typescript",
            }
        }
    ],
};

export default config;