/** @type {import('prettier').Config} */
const prettierConfig = {
  trailingComma: 'all',
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default prettierConfig;
