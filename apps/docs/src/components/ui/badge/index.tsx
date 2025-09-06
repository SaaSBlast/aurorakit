import { styled, type HTMLStyledProps } from '@aurorakit/styled-system/jsx'
import { badge } from '@aurorakit/styled-system/recipes'

export const Badge = styled('div', badge)

export type BadgeProps = HTMLStyledProps<typeof Badge>
