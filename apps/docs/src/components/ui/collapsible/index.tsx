'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { createStyleContext } from '@aurorakit/style-context'
import { styled } from '@aurorakit/styled-system/jsx'
import { collapsible } from '@aurorakit/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(collapsible)

export const Collapsible = withProvider(styled(CollapsiblePrimitive.Root), 'root')
export const CollapsibleTrigger = withContext(
  styled(CollapsiblePrimitive.CollapsibleTrigger),
  'trigger',
)
export const CollapsibleContent = withContext(
  styled(CollapsiblePrimitive.CollapsibleContent),
  'content',
)
