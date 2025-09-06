import type { UtilityConfig } from '@pandacss/types'

const ringWidthValues = {
  0: '0px',
  1: '1px',
  2: '2px',
  base: '3px',
  4: '4px',
  8: '8px',
} as const

const ringOffsetValues = {
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
} as const

export const focusRing: UtilityConfig = {
  focusRingWidth: {
    className: 'focus-ring-width',
    values: ringWidthValues,
    transform(value) {
      return {
        // NOTE: Comma after inset is required
        '--aurorakit-ring-offset-shadow': `var(--aurorakit-ring-inset,) 0 0 0 var(--aurorakit-ring-offset-width, ${ringOffsetValues[0]}) var(--aurorakit-ring-offset-color)`,
        // NOTE: Comma after inset is required
        '--aurorakit-ring-shadow': `var(--aurorakit-ring-inset,) 0 0 0 calc(${value} + var(--aurorakit-ring-offset-width, ${ringOffsetValues[0]})) var(--aurorakit-ring-color)`,
        boxShadow:
          'var(--aurorakit-ring-offset-shadow),var(--aurorakit-ring-shadow),var(--aurorakit-base-shadow,0 0 #0000)',
      }
    },
  },
  focusRingColor: {
    className: 'focus-ring-color',
    values: 'colors',
    transform(value: string) {
      return {
        '--aurorakit-ring-color': value,
      }
    },
  },
  focusRingOffsetWidth: {
    className: 'focus-ring-offset-width',
    values: ringOffsetValues,
    transform(value) {
      return {
        '--aurorakit-ring-offset-width': value,
      }
    },
  },
  focusRingOffsetColor: {
    className: 'focus-ring-offset-color',
    values: 'colors',
    transform(value: string) {
      return {
        '--aurorakit-ring-offset-color': value,
      }
    },
  },
  focusRingInset: {
    className: 'focus-ring-inset',
    values: { type: 'boolean' },
    transform(value: string) {
      return {
        '--aurorakit-ring-inset': value ? 'inset' : '',
      }
    },
  },
}
