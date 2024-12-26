
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";
import hooksPlugin from "eslint-plugin-react-hooks";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

const compat = new FlatCompat();

export default [
  /** General Configuration **/
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,

  /** TypeScript Configuration **/
  {
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2021,
        project: "tsconfig.json",
        sourceType: "module",
      },
    },
  },
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  /** TailwindCSS Configuration **/
  ...tailwind.configs["flat/recommended"],

  /** React Configuration **/
  ...fixupConfigRules(pluginReactConfig),
  {
    plugins: {
      "react-hooks": hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },

  /** Next.js Configuration **/
  {
    ignores: [".next/"],
  },
  ...fixupConfigRules(compat.extends("plugin:@next/next/core-web-vitals")),

  /** Prettier Configuration **/
  prettier,

  /** Custom Rules **/
  {
    rules: {
      /** Core JavaScript Rules **/
      "linebreak-style": ["error", "unix"],
      semi: ["error", "always"],
      "no-extra-semi": "error",
      "default-case": "off",
      camelcase: "off",
      "no-console": "warn",
      "no-multi-assign": "error",
      "no-return-await": "error",
      "prefer-template": "error",

      /** TypeScript Rules **/
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_|^err|^error",
          argsIgnorePattern: "^_|props|^_error",
        },
      ],
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],

      /** React Rules **/
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unknown-property": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",

      /** TailwindCSS Rules **/
      "tailwindcss/no-custom-classname": "off",

      /** Prettier Overrides **/
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          trailingComma: "all",
        },
      ],
    },
  },

  /** Ignore Files **/
  {
    ignores: [
      "*/**.js",
      "*.js",
      "zod",
      "*/**.mjs",
      "vitest.config.ts",
      "next-env.d.ts",
      ".next",
      ".react-email",
      ".vercel",
      ".vscode",
      "tailwind.config.js",
      "next.config.js",
      "eslint.config.mjs",
      "**/worker.js",
    ],
  },
];
