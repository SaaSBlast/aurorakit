import type { PropsWithChildren } from 'react'
import { css } from '@aurorakit/styled-system/css'
import { ScrollArea } from '@/components/ui/scroll-area'
import { SidebarNav } from '@/components/docs/sidebar-nav'

const DocsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={css({
        maxW: '7xl',
        mx: 'auto',
        flex: '1',
        px: '4',
        alignItems: 'flex-start',
        md: {
          display: 'grid',
          gridTemplateColumns: '240px minmax(0, 1fr)',
          gap: '6',
        },
        lg: {
          gridTemplateColumns: '280px minmax(0, 1fr)',
          gap: '10',
        },
      })}
    >
      <aside
        className={css({
          position: 'fixed',
          top: '14',
          zIndex: 30,
          display: 'none',
          h: 'calc(100vh - 3.5rem)',
          w: 'full',
          flexShrink: '0',
          md: {
            position: 'sticky',
            display: 'block',
          },
        })}
      >
        <ScrollArea
          className={css({
            h: 'full',
            pr: '2.5',
            py: '6',
            lg: {
              py: '8',
            },
          })}
        >
          <SidebarNav />
        </ScrollArea>
      </aside>
      {children}
    </div>
  )
}

export default DocsLayout
