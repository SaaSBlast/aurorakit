import { cx, css } from '@aurorakit/styled-system/css'
import { lead } from '@aurorakit/styled-system/recipes'

export function Lead({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cx(lead(), css({ display: 'block', fontSize: 'lg' }), className)}>{children}</p>
  )
}
