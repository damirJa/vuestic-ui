import { mount } from '@vue/test-utils'

import VaDataTable from '../VaDataTable.vue'

describe('VaDataTable', () => {
  it('should render without an error', () => {
    const wrapper = mount(VaDataTable)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
