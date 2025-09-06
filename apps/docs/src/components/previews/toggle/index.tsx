import { Bold } from 'lucide-react'
import { icon } from '@aurorakit/styled-system/recipes'
import { Toggle } from '@/components/ui/toggle'

export default function Example() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className={icon()} />
    </Toggle>
  )
}
