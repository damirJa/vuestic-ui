<template>
  <div class="interactive-wrap">
    <va-data-table
      :fields="fields"
      :data="users"
      :currentPage="currentPage"
      clickable="true"
      hoverable="true"
      @pageSelected="selectHandler($event)"
      @rowClicked="selectedUser = $event"
    />
    <div class="selection">You selected: <br> {{selectedUser.fullName}}</div>
  </div>
</template>

<script lang="ts">
import users from '../../../ui/src/data/Users'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import VaDataTable from '../../../ui/src/components/vuestic-components/va-data-table/VaDataTable.vue'

@Component({
  components: {
    VaDataTable,
  },
})
export default class VaDataTableExample extends Vue {
    currentPage = 1
    selectedUser = {}
    users: Array<any> = users.slice()
    fields: Array<any> = [{
      name: '__slot:select',
      width: '30px',
    }, {
      name: 'firstName',
      label: 'First Name',
      sortField: 'firstName',
      width: '30%',
    }, {
      name: 'lastName',
      label: 'Last Name',
      sortField: 'lastName',
      width: '30%',
    }, {
      name: '__slot:actions',
      dataClass: 'text-right',
    }]

    selectHandler ($event: number) {
      this.currentPage = $event
    }
}
</script>

<style scoped lang="scss">
  .selection {
    font-weight: bold;
    font-size: 16px;
  }

  .interactive-wrap {
    display: flex;
    align-items: center;
    grid-gap: 10px;
  }
</style>
