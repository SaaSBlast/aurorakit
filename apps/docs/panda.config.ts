import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Use React
  jsxFramework: 'react',

  staticCss: {
    recipes: {
      // For dynamic `side` preview
      sheet: [{ side: ['*'] }],
      toast: [{ variant: ['*'] }],
    },
  },

  // Presets
  presets: ['@aurorakit/preset'],

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx,mdx}', './theme.config.tsx'],

  // Files to exclude
  exclude: [],

  emitPackage: true,
  outdir: '@aurorakit/styled-system',
})
