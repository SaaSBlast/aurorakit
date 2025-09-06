import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  enter: {
    from: {
      opacity: 'var(--aurorakit-enter-opacity, 1)',
      transform:
        'translate3d(var(--aurorakit-enter-translate-x, 0), var(--aurorakit-enter-translate-y, 0), 0) scale3d(var(--aurorakit-enter-scale, 1), var(--aurorakit-enter-scale, 1), var(--aurorakit-enter-scale, 1)) rotate(var(--aurorakit-enter-rotate, 0))',
    },
  },
  exit: {
    to: {
      opacity: 'var(--aurorakit-exit-opacity, 1)',
      transform:
        'translate3d(var(--aurorakit-exit-translate-x, 0), var(--aurorakit-exit-translate-y, 0), 0) scale3d(var(--aurorakit-exit-scale, 1), var(--aurorakit-exit-scale, 1), var(--aurorakit-exit-scale, 1)) rotate(var(--aurorakit-exit-rotate, 0))',
    },
  },
  'accordion-down': {
    from: { height: 0 },
    to: { height: 'var(--radix-accordion-content-height)' },
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: 0 },
  },
})
