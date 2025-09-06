import { styled, type HTMLStyledProps } from '@aurorakit/styled-system/jsx'
import { input } from '@aurorakit/styled-system/recipes'

export const Input = styled('input', input)
export type InputProps = HTMLStyledProps<typeof Input>
