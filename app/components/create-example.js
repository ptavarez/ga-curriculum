import Component from '@ember/component'

export default Component.extend({
  example: {
    title: ''
  },

  actions: {
    createExample () {
      this.sendAction('create', this.get('example'))
    }
  }
})
