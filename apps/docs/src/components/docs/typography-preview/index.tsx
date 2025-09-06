import * as React from 'react'
import { css } from '@aurorakit/styled-system/css'
import { Preview } from '@/components/docs/preview'
import { Tabs, Tab } from '@/components/docs/tabs'
import { LoadingText } from '@/components/docs/loading-text'

export interface TypographyPreviewProps {
  type: string
  withTextStyle?: boolean
  children: React.ReactNode
}

const getExampleTypography = (type: string) =>
  React.lazy(() => import(`@/components/previews/typography/${type}.tsx`))

const getExampleTextStyleTypography = (type: string) =>
  React.lazy(() => import(`@/components/previews/typography/${type}-text-style.tsx`))

export const TypographyPreview = ({ type, withTextStyle, children }: TypographyPreviewProps) => {
  const Example = getExampleTypography(type)
  const ExampleTextStyle = withTextStyle ? getExampleTextStyleTypography(type) : null

  const [recipe, textStyle] = React.Children.toArray(children)

  return (
    <Tabs
      items={
        withTextStyle && textStyle
          ? ['Preview (Recipe)', 'Recipe', 'Preview (Text Style)', 'Text Style']
          : ['Preview', 'Recipe']
      }
    >
      <Tab>
        <Preview className={css({ mt: '6', mb: '4' })}>
          <React.Suspense fallback={<LoadingText />}>
            <Example />
          </React.Suspense>
        </Preview>
      </Tab>
      <Tab>{recipe}</Tab>
      {withTextStyle && !!textStyle && ExampleTextStyle && (
        <Tab>
          <Preview className={css({ mt: '6', mb: '4' })}>
            <React.Suspense fallback={<LoadingText />}>
              <ExampleTextStyle />
            </React.Suspense>
          </Preview>
        </Tab>
      )}
      {withTextStyle && !!textStyle && <Tab>{textStyle}</Tab>}
    </Tabs>
  )
}
