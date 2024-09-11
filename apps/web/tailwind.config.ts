import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config/tailwind.config';

const config: Pick<Config, 'content' | 'presets'> = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  presets: [sharedConfig],
};

export default config;
