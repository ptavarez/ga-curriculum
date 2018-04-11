import Component from '@ember/component'

export default Component.extend({

  actions: {
    deleteExample () {
      this.sendAction('delete', this.get('example'))
      console.log(this.get('example'))
    }
  }
})
