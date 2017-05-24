import Vue from 'vue'
import Home from '@/pages/home'

describe('home.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.home h1').textContent)
      .to.equal('Hello Vue, this is home page')
  })
})
