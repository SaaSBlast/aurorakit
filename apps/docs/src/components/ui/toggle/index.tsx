'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import { styled } from '@aurorakit/styled-system/jsx'
import { toggle } from '@aurorakit/styled-system/recipes'

export const Toggle = styled(TogglePrimitive.Root, toggle)
