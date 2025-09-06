import { Loader2 } from 'lucide-react'
import { css, cx } from '@aurorakit/styled-system/css'
import { icon } from '@aurorakit/styled-system/recipes'
import { Button } from '@/components/ui/button'

export default function Example() {
  return (
    <Button disabled>
      <Loader2 className={cx(icon(), css({ animation: 'spin' }))} />
      Please wait
    </Button>
  )
}
