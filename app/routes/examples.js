import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('example')
  },

  actions: {
    createExample (example) {
      this.get('store').createRecord('example', example)
        .save()
    }
  }
})
