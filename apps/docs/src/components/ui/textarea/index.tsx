import { styled, HTMLStyledProps } from '@aurorakit/styled-system/jsx'
import { textarea } from '@aurorakit/styled-system/recipes'

export const Textarea = styled('textarea', textarea)
export type TextareaProps = HTMLStyledProps<typeof Textarea>
