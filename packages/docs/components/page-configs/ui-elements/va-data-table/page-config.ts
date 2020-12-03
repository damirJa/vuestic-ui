import { ApiDocsBlock } from '../../../../types/configTypes'
import { DocsHelper } from '../../../../helpers/DocsHelper'

export default [
  DocsHelper.title('dataTable.title'),
  DocsHelper.paragraph('dataTable.summaryText'),
  DocsHelper.subtitle('all.examples'),
  DocsHelper.headline('dataTable.examples.default.title'),
  DocsHelper.paragraph('dataTable.examples.default.text'),
  DocsHelper.example('va-data-table/Default'),
] as ApiDocsBlock[]
