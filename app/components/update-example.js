import Component from '@ember/component'

export default Component.extend({
  example: {
    text: ''
  },

  actions: {
    updateExample () {
      console.log(this.get('example'))
      this.sendAction('update', this.get('example'))
    }
  }
})
