<template>
  <va-data-table
    :fields="fields"
    :data="filteredUsers"
    :per-page="perPage"
    :currentPage="currentPage"
    @pageSelected="selectHandler($event)"/>
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
    term = ''
    perPage = 4
    currentPage = 1
    perPageOptions: Array<number> = [4, 6, 10]
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

    get filteredUsers (): Array<any> {
      if (!this.term || this.term.length < 1) {
        return this.users
      }

      return this.users.filter(user => {
        return user.firstName.toLowerCase().startsWith(this.term.toLowerCase())
      })
    }
}
</script>
