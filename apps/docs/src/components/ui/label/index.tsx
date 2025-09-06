import { styled, type HTMLStyledProps } from '@aurorakit/styled-system/jsx'
import { label } from '@aurorakit/styled-system/recipes'

export const Label = styled('label', label)
export type LabelProps = HTMLStyledProps<typeof Label>
