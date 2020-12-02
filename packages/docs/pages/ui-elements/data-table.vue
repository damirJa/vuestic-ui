<template>
  <docs-content :config="configComputed"/>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import DocsContent from '../../components/DocsContent.vue'
import dataTableConfig from '../../components/page-configs/ui-elements/va-data-table/page-config'

  @Component({
    components: {
      DocsContent,
    },
  })

export default class DataTable extends Vue {
  get configComputed () {
    return dataTableConfig
  }
}
</script>
