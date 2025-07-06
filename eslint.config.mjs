import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Clone the jsx-a11y recommended config and strip the `plugins` key
const { plugins, ...jsxA11yRulesOnly } = jsxA11y.flatConfigs.recommended;

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  jsxA11yRulesOnly,
];

export default eslintConfig;
