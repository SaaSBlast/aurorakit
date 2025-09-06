import { Underline } from 'lucide-react'
import { icon } from '@aurorakit/styled-system/recipes'
import { Toggle } from '@/components/ui/toggle'

export default function Example() {
  return (
    <Toggle aria-label="Toggle italic" disabled>
      <Underline className={icon()} />
    </Toggle>
  )
}
