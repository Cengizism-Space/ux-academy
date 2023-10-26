// This plugin is responsible for adding a “Preview” tab to the document pane
// You can add any React component to `S.view.component` and it will be rendered in the pane
// and have access to content in the form in real-time.
// It's part of the Studio's “Structure Builder API” and is documented here:
// https://www.sanity.io/docs/structure-builder-reference

import { DRAFT_MODE_ROUTE, previewSecretId } from 'lib/sanity.api'
import { DefaultDocumentNodeResolver } from 'sanity/desk'
import {
  defineUrlResolver,
  Iframe,
  type IframeOptions,
} from 'sanity-plugin-iframe-pane'
import sourceType from 'schemas/source'
import cardType from 'schemas/card'

import SourceAvatarPreviewPane from './SourceAvatarPreviewPane'

const urlResolver = defineUrlResolver({
  base: DRAFT_MODE_ROUTE,
  requiresSlug: [cardType.name],
})
const iframeOptions = {
  url: urlResolver,
  urlSecretId: previewSecretId,
  reload: { button: true },
} satisfies IframeOptions

export const previewDocumentNode = (): DefaultDocumentNodeResolver => {
  return (S, { schemaType }) => {
    switch (schemaType) {
      case sourceType.name:
        return S.document().views([
          S.view.form(),
          S.view
            .component(({ document }) => (
              <SourceAvatarPreviewPane
                name={document.displayed.name as any}
                picture={document.displayed.picture as any}
              />
            ))
            .title('Preview'),
        ])

      case cardType.name:
        return S.document().views([
          S.view.form(),
          S.view.component(Iframe).options(iframeOptions).title('Preview'),
        ])
      default:
        return null
    }
  }
}
