'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { createStyleContext } from '@aurorakit/style-context'
import { styled } from '@aurorakit/styled-system/jsx'
import { tooltip } from '@aurorakit/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(tooltip)

export const TooltipProvider = TooltipPrimitive.Provider
export const Tooltip = withProvider(styled(TooltipPrimitive.Root), 'root')
export const TooltipTrigger = withContext(styled(TooltipPrimitive.Trigger), 'trigger')
export const TooltipContent = withContext(styled(TooltipPrimitive.Content), 'content', {
  sideOffset: 4,
})
