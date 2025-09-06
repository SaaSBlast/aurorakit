import type { UtilityConfig } from '@pandacss/types'

const baseTransform = {
  transform:
    'translate(var(--aurorakit-translate-x, 0), var(--aurorakit-translate-y, 0)) rotate(var(--aurorakit-rotate, 0)) skewX(var(--aurorakit-skew-x, 0)) skewY(var(--aurorakit-skew-y, 0)) scaleX(var(--aurorakit-scale-x, 1)) scaleY(var(--aurorakit-scale-y, 1))',
}

export const transform: UtilityConfig = {
  translate: {
    className: 'translate',
    values: 'spacing',
    transform: (value: string) => {
      return {
        ...baseTransform,
        '--aurorakit-translate-x': value,
        '--aurorakit-translate-y': value,
      }
    },
  },
  translateY: {
    className: 'translate_y',
    values: 'spacing',
    transform: (value: string) => {
      return {
        ...baseTransform,
        '--aurorakit-translate-y': value,
      }
    },
  },
  translateX: {
    className: 'translate_x',
    values: 'spacing',
    transform: (value: string) => {
      return {
        ...baseTransform,
        '--aurorakit-translate-x': value,
      }
    },
  },
}
