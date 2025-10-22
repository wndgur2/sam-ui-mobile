// eslint.config.js
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(["dist/*"]),
  reactHooks.configs.flat.recommended,
  eslint.configs.recommended,
  tseslint.configs.recommended,
]);