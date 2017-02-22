import Vue from 'vue'
import Icon from 'src/components/icon'

describe('icon.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><Icon type="icon-javascript"></Icon></div>',
      components: { Icon }
    }).$mount()
    expect(vm.$el.querySelector('div .icon-javascript')).to.exist
  })
})
