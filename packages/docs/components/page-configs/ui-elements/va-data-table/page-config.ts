import { ApiDocsBlock } from '../../../../types/configTypes'
import { DocsHelper } from '../../../../helpers/DocsHelper'

export default [
  DocsHelper.title('dataTable.title'),
  DocsHelper.paragraph('dataTable.summaryText'),
  DocsHelper.subtitle('all.examples'),
  DocsHelper.headline('dataTable.examples.default.title'),
  DocsHelper.example('va-data-table/Default'),
  DocsHelper.headline('dataTable.examples.pagination.title'),
  DocsHelper.paragraph('dataTable.examples.pagination.text'),
  DocsHelper.example('va-data-table/Pagination'),
  DocsHelper.headline('dataTable.examples.interactive.title'),
  DocsHelper.paragraph('dataTable.examples.interactive.text'),
  DocsHelper.example('va-data-table/Interactive'),
] as ApiDocsBlock[]
