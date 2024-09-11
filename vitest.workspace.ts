import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    test: {
      name: 'ui',
      include: ['packages/ui/**/*.test.{ts,tsx}'],
      environment: 'jsdom',
    },
  },
  {
    test: {
      name: 'web',
      include: ['apps/web/**/*.test.{ts,tsx}'],
      environment: 'jsdom',
    },
  },
]);
